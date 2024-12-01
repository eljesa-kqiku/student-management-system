import 'reflect-metadata'
import {Container} from "inversify"
import {TYPES} from "./types";

import StudentGateway from "@/gateways/StudentGateway";
import LoginGateway from "@/gateways/LoginGateway";

import StudentRepository from "@/views/shared/repositories/StudentRepository";
import LoginRepository from "@/views/shared/repositories/LoginRepository";

import StudentPresenter from "@/views/Students/StudentPresenter";
import EditStudentPresenter from "@/views/Students/StudentActions/Edit/EditStudentPresenter";
import DeleteStudentPresenter from "@/views/Students/StudentActions/Delete/DeleteStudentPresenter";
import LoginPresenter from "@/views/Login/LoginPresenter"
import AppPresenter from "@/views/App/AppPresenter"
import HeaderPresenter from "@/views/Header/HeaderPresenter"

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
container.bind(TYPES.LoginGateway).toDynamicValue(() => {
    return new LoginGateway()
})

/**
    Repositories
 */
container.bind(TYPES.StudentRepository).to(StudentRepository).inSingletonScope()
container.bind(TYPES.LoginRepository).to(LoginRepository).inSingletonScope()

/**
    Presenters
 */
container.bind(TYPES.StudentPresenter).to(StudentPresenter)
container.bind(TYPES.EditStudentPresenter).to(EditStudentPresenter)
container.bind(TYPES.DeleteStudentPresenter).to(DeleteStudentPresenter)
container.bind(TYPES.LoginPresenter).to(LoginPresenter)
container.bind(TYPES.AppPresenter).to(AppPresenter)
container.bind(TYPES.HeaderPresenter).to(HeaderPresenter)

/**
    Models
 */
container.bind(TYPES.StudentModel).to(StudentModel)
// container.bind(TYPES.MunicipalityModel).toSelf()