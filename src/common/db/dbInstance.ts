import { createConnection, mongo, Query, Connection, Schema, Model } from 'mongoose'
import { notNullOrEmpty } from '../helper/validation.helper'
import { IUser, UserSchema } from './models/user'

export default class DbInstance {
    // private field
    #dbConnection: Connection
    #dbSession: mongo.ClientSession | undefined

    // public property
    Users: Model<IUser>

    constructor() {
        checkEnvVariables()
        this.#dbConnection = createConnection(process.env.DB_CONNECTION_STRING!)
        this.Users = this.#dbConnection.model('users', UserSchema)
    }

    async startTransaction() {
        this.#dbSession = await this.#dbConnection.startSession()
        this.#dbSession.startTransaction()
    }

    commitTransaction() {
        return this.#dbSession?.commitTransaction().then(() => {
            this.#dbSession?.endSession()
        })
    }

    attachTransactionToQuery<TResult, TModel>(query: Query<TResult, TModel>) {
        if (this.#dbSession === null || this.#dbSession!.hasEnded) {
            throw new Error('No transaction to attach')
        }

        query.session(this.#dbSession!)
    }
}

const checkEnvVariables = () => {
    const isValid = notNullOrEmpty(process.env.DB_CONNECTION_STRING)

    if (!isValid) {
        throw new Error('db CONNECTION_STRING not found')
    }
}