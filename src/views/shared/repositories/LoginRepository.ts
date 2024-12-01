import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import { TYPES } from "@/ioc/types"
import {saveToLocalStorage} from "@/common/services/local-storage-service";

@injectable()
export default class LoginRepository {
    @inject(TYPES.LoginGateway) loginGateway

    private pm = {
       logged_user: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    async login(email, password){
        try{
            let payload = {
                email,
                password
            }
            let res = await this.loginGateway.login(payload)
            this.pm.logged_user = res.data.user
            saveToLocalStorage('token', res.data.token)
        }catch(e){
            console.log(e)
        }
    }

    async logOut(){
        saveToLocalStorage('token', null)
        this.vm.logged_user = null
    }

    get loggedUser(){
        return this.pm.logged_user
    }
}