import { injectable } from "inversify"
import DbInstance from "../dbInstance"
import { IUser } from "../models/user"

interface IUserStorage {
    findUser(userIdentifier: string): Promise<IUser | null>
    addUser(user: IUser): void
}

@injectable()
class UserStorage implements IUserStorage {
    #db: DbInstance

    constructor() {
        this.#db = new DbInstance()
    }

    findUser(userIdentifier: string): Promise<IUser | null> {
        return this.#db.Users.findOne({
            $or: [{
                username: userIdentifier
            }, {
                email: userIdentifier
            }]
        }).exec()
    }

    addUser(user: IUser) {
        const userModel = new this.#db.Users({ ...user })
        userModel.save()
    }
}

export { type IUserStorage, UserStorage }