import { Schema } from 'mongoose'

export interface IUser {
  username: string
  passwordHash: string
  email: string
  isExternalProviderUser: boolean
  providerName: string | null
}

export const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  email: { type: String, required: true },
  isExternalProviderUser: { type: Boolean, required: true, default: false },
  providerName: { type: String, required: false }
})
