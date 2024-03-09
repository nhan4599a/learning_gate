import { env } from "@/env/env";
import { generateSalt, pbkdf2Hash } from "../common/helper/crypto.helper";
import { type IUserStorage } from "../common/db/storage/user.storage";
import { combineBuffers } from "../common/helper/encoding.helper";
import { compare } from "../common/helper/array.helper";
import { ISignInViewModel } from "@/common/model/authentication";
import { cookies } from 'next/headers'
import { IUser } from "../common/db/models/user";
import { SignJWT, jwtVerify } from "jose";
import { inject, injectable } from "inversify";
import { ServiceTypes } from "@/common/dependency-injection/services.types";

export interface IAuthenticationService {
    signIn(model: ISignInViewModel): Promise<boolean>
    signOut(): void
    verifyAccessToken(accessToken: string): Promise<boolean>
}

@injectable()
export class AuthenticationService implements IAuthenticationService {
    #userStorage: IUserStorage
    #jwtHashingKey: Uint8Array

    constructor(@inject(ServiceTypes.IUserStorage) userStorage: IUserStorage) {
        this.#userStorage = userStorage
        this.#jwtHashingKey = new TextEncoder().encode(env.JWT_HASHING_SECRET_KEY)
    }

    async signIn(model: ISignInViewModel): Promise<boolean> {
        const user = await this.#userStorage.findUser(model.username)

        if (!user || user.isExternalProviderUser) {
            return false
        }

        const isPasswordCorrect = await this.#verifyPassword(
            user.passwordHash,
            model.password
        )

        const accessToken = await this.#generateAccessToken(user)
        this.#setAuthenticationCookie(accessToken)

        return isPasswordCorrect
    }

    signOut() {
        this.#clearAuthenticationCookie()
    }

    async hashPassword(password: string) {
        const saltBuffer = generateSalt(env.PASSWORD_HASHING_SALT_LENGTH)

        const passwordHashBuffer = await pbkdf2Hash(
            password,
            saltBuffer,
            env.PBKDF2_OUTPUT_LENGTH,
            env.PBKDF2_ITERATION,
            env.PBKDF2_HASHING_ALG
        )

        const hashedPasswordBuffer = combineBuffers(saltBuffer, passwordHashBuffer)

        return new TextDecoder().decode(hashedPasswordBuffer)
    }

    async verifyAccessToken(accessToken: string): Promise<boolean> {
        try {
            await jwtVerify(
                accessToken,
                this.#jwtHashingKey,
                {
                    algorithms: [env.JWT_HASHING_ALGORITHM]
                }
            )

            return true
        } catch {
            return false
        }
    }
    
    async #verifyPassword(hashedPassword: string, userProvidedPassword: string) {
        const storedHasedPasswordBuffer = new TextEncoder().encode(hashedPassword)

        const saltBuffer = storedHasedPasswordBuffer.slice(
            0, env.PASSWORD_HASHING_SALT_LENGTH - 1
        )

        const hashedPasswordBuffer = storedHasedPasswordBuffer.slice(
            env.PASSWORD_HASHING_SALT_LENGTH
        )

        const userProvidedHashedPassword = await pbkdf2Hash(
            userProvidedPassword,
            saltBuffer,
            env.PBKDF2_OUTPUT_LENGTH,
            env.PBKDF2_ITERATION,
            env.PBKDF2_HASHING_ALG
        )

        return compare(
            hashedPasswordBuffer,
            userProvidedHashedPassword,
            undefined,
            true
        )
    }

    #setAuthenticationCookie(content: string) {
        cookies().set(
            env.AUTHENTICATION_COOKIE_KEY,
            content,
            {
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            }
        )
    }

    #clearAuthenticationCookie() {
        cookies().delete(env.AUTHENTICATION_COOKIE_KEY)
    }

    #generateAccessToken(user: IUser) {
        return new SignJWT({
            email: user.email
        }).setProtectedHeader({
            alg: env.JWT_HASHING_ALGORITHM
        }).setIssuedAt()
        .setExpirationTime(env.JWT_EXPIRED_IN)
        .sign(this.#jwtHashingKey)
    }
}