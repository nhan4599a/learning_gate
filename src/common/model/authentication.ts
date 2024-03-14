export interface IAuthenticationViewModel {
  username: string
  password: string
}

export interface ISignInViewModel extends IAuthenticationViewModel {
  rememberMe: boolean
}

export interface ISignUpViewModel extends IAuthenticationViewModel {
  name: string
  birthDate: Date
}
