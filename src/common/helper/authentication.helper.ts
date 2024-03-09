import { AuthenticationService } from "@/services/authentication.service"
import { UserStorage } from "../db/storage/user.storage"
import { ISignInViewModel } from "../model/authentication"

const getAuthenticationService = () => {
    const userStorage = new UserStorage()
    return new AuthenticationService(userStorage)
}

export const signIn = (signInModel: ISignInViewModel) => {
    const authenticationService = getAuthenticationService()

    return authenticationService.signIn(signInModel)
}