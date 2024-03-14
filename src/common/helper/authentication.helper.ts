import { IAuthenticationService } from '@/services/authentication.service'
import { ISignInViewModel } from '../model/authentication'
import DIContainer from '../dependency-injection/container'
import { ServiceTypes } from '../dependency-injection/services.types'

const getAuthenticationService = () => {
  return DIContainer.get<IAuthenticationService>(ServiceTypes.IAuthenticationService)
}

export const signIn = (signInModel: ISignInViewModel) => {
  const authenticationService = getAuthenticationService()

  return authenticationService.signIn(signInModel)
}
