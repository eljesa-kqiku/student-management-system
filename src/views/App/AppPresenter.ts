import {injectable, inject} from "inversify";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";
import {readFromLocalStorage} from "../../common/services/local-storage-service";

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

    initiateRoute(){
        try{
            let token = readFromLocalStorage('token')
            if(!token || token === '' || token === null || token === 'null'){
                return '/login'
            }else {
                return '/students'
            }
        }catch(error){
            console.log(error)
        }
    }

}