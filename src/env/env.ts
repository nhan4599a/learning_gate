import { HmacAlgorithms } from '@/common/helper/crypto.helper'
import zod from 'zod'

const envSchema = zod.object({
    DB_CONNECTION_STRING: zod.string(),
    PASSWORD_HASHING_SALT_LENGTH: zod.number().int(),
    PBKDF2_OUTPUT_LENGTH: zod.number().int(),
    PBKDF2_ITERATION: zod.number().int(),
    PBKDF2_HASHING_ALG: zod.nativeEnum(HmacAlgorithms),
    AUTHENTICATION_COOKIE_KEY: zod.string(),
    JWT_HASHING_ALGORITHM: zod.string(),
    JWT_EXPIRED_IN: zod.number(),
    JWT_HASHING_SECRET_KEY: zod.string()
})

export const env = envSchema.parse({
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    PASSWORD_HASHING_SALT_LENGTH: process.env.PASSWORD_HASHING_SALT_LENGTH,
    PBKDF2_OUTPUT_LENGTH: process.env.PBKDF2_OUTPUT_LENGTH,
    PBKDF2_ITERATION: process.env.PBKDF2_ITERATION,
    PBKDF2_HASHING_ALG: process.env.PBKDF2_HASHING_ALG,
    AUTHENTICATION_COOKIE_KEY: process.env.AUTHENTICATION_COOKIE_KEY,
    JWT_EXPIRED_IN: process.env.JWT_EXPIRED_IN,
    JWT_HASHING_SECRET_KEY: process.env.JWT_HASHING_SECRET_KEY
})