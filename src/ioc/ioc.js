import 'reflect-metadata'
import {Container} from "inversify"
import {TYPES} from "./types";

/**
 Gateways
 */
import {StudentGateway} from "@/gateways/StudentGateway";

/**
 Repositories
 */
import StudentRepository from "@/views/shared/repositories/StudentRepository";

/**
 Presenters
 */
import StudentPresenter from "@/views/Students/StudentPresenter";

/**
 Models
 */
import StudentModel from "@/views/shared/models/StudentModel";
import MunicipalityModel from "@/views/shared/models/MunicipalityModel";

export const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Transient'
})

/**
    Gateways
 */
container.bind(TYPES.StudentGateway).toDynamicValue(() => {
    return new StudentGateway()
})

/**
    Repositories
 */
container.bind(TYPES.StudentRepository).to(StudentRepository).inSingletonScope()

/**
    Presenters
 */
container.bind(TYPES.StudentPresenter).to(StudentPresenter)

/**
    Models
 */
container.bind(StudentModel).toSelf()
container.bind(MunicipalityModel).toSelf()