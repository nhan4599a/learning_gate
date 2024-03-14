import { Container } from "inversify"
import { setup } from "./setup"

const DIContainer = new Container()

export default setup(DIContainer)