import {injectable} from "inversify";
import { globalConfig } from "@/globalConfig.js";
import axios from 'axios'
@injectable()
export default class LoginGateway {
    login(payload){
        let url = `${globalConfig.basic_url}/auth/login`

        return axios.post(url, payload)
    }
}