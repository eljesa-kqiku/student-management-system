import {injectable, inject} from "inversify";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";

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

    async login(){
        await this.loginRepository.login(this.vm.email, this.vm.password)
    }

    isUserLoggedIn(){
        return !!this.loginRepository.loggedUser
    }
}