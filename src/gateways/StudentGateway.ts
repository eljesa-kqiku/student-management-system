import {injectable} from "inversify";
import axios from "axios";
import { globalConfig } from "@/globalConfig.js";

@injectable()
export default class StudentGateway {
    fetchAllStudents(): Promise<Object>{
        let url = `${globalConfig.basic_url}/students`

        return axios.get(url)
    }
}