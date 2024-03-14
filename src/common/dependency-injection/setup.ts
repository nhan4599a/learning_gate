import { Container } from "inversify";
import { IUserStorage, UserStorage } from "../db/storage/user.storage";
import { IAuthenticationService, AuthenticationService } from "@/services/authentication.service";
import { ServiceTypes } from "./services.types";

export const setup = (container: Container) => {
    container.bind<IUserStorage>(
        ServiceTypes.IUserStorage
    ).to(UserStorage)

    container.bind<IAuthenticationService>(
        ServiceTypes.IAuthenticationService
    ).to(AuthenticationService)

    return container
}