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

    get loggedUser(){
        return this.pm.logged_user
    }

    set loggedUser(value: Object){
        this.pm.logged_user = value
    }

    async login(email, password){
        try{
            let payload = {
                email,
                password
            }
            let res = await this.loginGateway.login(payload)
            this.loggedUser = res.data.user
            saveToLocalStorage('token', res.data.token)
            saveToLocalStorage('user', res.data.user.user_id)
        }catch(e){
            console.log(e)
        }
    }

    async logOut(){
        saveToLocalStorage('token', null)
        this.loggedUser = null
    }

    async getUserById(user_id: String){
        let payload = {
            user_id: user_id
        }
        let res = await this.loginGateway.getUserById(payload)
        this.loggedUser = res.data.user
    }
}