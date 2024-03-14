const zod = require("zod")

const BuildPhaseHmacAlgorithms = {
  SHA_256: "SHA-256",
  SHA_512: "SHA-512"
}

const zodPrimitive = zod.coerce

const envSchema = zod.object({
  DB_CONNECTION_STRING: zodPrimitive.string(),
  PASSWORD_HASHING_SALT_LENGTH: zodPrimitive.number().int(),
  PBKDF2_OUTPUT_LENGTH: zodPrimitive.number().int(),
  PBKDF2_ITERATION: zodPrimitive.number().int(),
  PBKDF2_HASHING_ALGORITH: zod.nativeEnum(BuildPhaseHmacAlgorithms),
  AUTHENTICATION_COOKIE_KEY: zodPrimitive.string(),
  JWT_HASHING_ALGORITHM: zodPrimitive.string(),
  JWT_EXPIRED_IN: zodPrimitive.number(),
  JWT_HASHING_SECRET_KEY: zodPrimitive.string()
})

module.exports.env = envSchema.parse({
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  PASSWORD_HASHING_SALT_LENGTH: process.env.PASSWORD_HASHING_SALT_LENGTH,
  PBKDF2_OUTPUT_LENGTH: process.env.PBKDF2_OUTPUT_LENGTH,
  PBKDF2_ITERATION: process.env.PBKDF2_ITERATION,
  PBKDF2_HASHING_ALGORITH: process.env.PBKDF2_HASHING_ALGORITH,
  AUTHENTICATION_COOKIE_KEY: process.env.AUTHENTICATION_COOKIE_KEY,
  JWT_EXPIRED_IN: process.env.JWT_EXPIRED_IN,
  JWT_HASHING_SECRET_KEY: process.env.JWT_HASHING_SECRET_KEY
})
