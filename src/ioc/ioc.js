import 'reflect-metadata'
import {Container} from "inversify"
import {TYPES} from "./types";

import {StudentGateway} from "@/gateways/StudentGateway";

import StudentRepository from "@/views/shared/repositories/StudentRepository";

import StudentPresenter from "@/views/Students/StudentPresenter";
import EditStudentPresenter from "@/views/Students/StudentActions/Edit/EditStudentPresenter";
import DeleteStudentPresenter from "@/views/Students/StudentActions/Delete/DeleteStudentPresenter";

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
container.bind(TYPES.EditStudentPresenter).to(EditStudentPresenter)
container.bind(TYPES.DeleteStudentPresenter).to(DeleteStudentPresenter)

/**
    Models
 */
container.bind(TYPES.StudentModel).to(StudentModel)
// container.bind(TYPES.MunicipalityModel).toSelf()