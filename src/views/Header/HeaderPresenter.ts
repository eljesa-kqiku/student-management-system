import {makeAutoObservable} from "mobx";
import {inject, injectable} from "inversify";
import { TYPES } from '@/ioc/types'

@injectable()
export default class HeaderPresenter {
    @inject(TYPES.LoginRepository) loginRepository;

    constructor() {
        makeAutoObservable(this)
    }

    get loggedUserName(){
        return this.loginRepository.loggedUser?.user_username;
    }

    logOut():void {
        this.loginRepository.logOut();
    }
}