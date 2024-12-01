import {injectable, inject} from "inversify";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";
import StudentModel from "../shared/models/StudentModel";
import router from "@/router";
import deepClone from 'clone'
import { SortByModel, SortByType } from "../shared/models/SortByModel";
import {snakeToTitleCase} from "../../common/services/utility-service";

@injectable()
export default class LoginPresenter {
    @inject(TYPES.LoginRepository) loginRepository;

    vm = {
        email: "",
        password: "",
    }

    constructor() {
        makeAutoObservable(this)
    }

    setEmail(email: string){
        this.vm.email = email;
    }

    setPassword(email: string){
        this.vm.password = email;
    }

    login(){
        this.loginRepository.login(this.vm.email, this.vm.password)
    }

    isUserLoggedIn(){
        return !!this.loginRepository.loggedUser
    }
}