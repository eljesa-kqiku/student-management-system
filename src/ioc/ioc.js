import 'reflect-metadata'
import {Container} from "inversify"
import {TYPES} from "./types";

export const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Transient'
})