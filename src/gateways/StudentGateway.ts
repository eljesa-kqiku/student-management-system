import {injectable} from "inversify";
import axios from "axios";
import { globalConfig } from "@/globalConfig.js";

@injectable()
export default class StudentGateway {
    fetchAllStudents(): Promise<Object>{
        let url = `${globalConfig.basic_url}/students`

        return axios.get(url)
    }

    getStudentById(id: string): Promise<Object>{
        let url = `${globalConfig.basic_url}/students/${id}`

        return axios.get(url)
    }

    editStudent(id: string, studentData: Object): Promise<Object>{
        let url = `${globalConfig.basic_url}/students/${id}`

        return axios.patch(url, studentData)
    }

    createStudent(payload: Object): Promise<Object>{
        let url = `${globalConfig.basic_url}/students`

        return axios.put(url, payload)
    }

    deleteStudent(id: String): Promise<Object>{
        let url = `${globalConfig.basic_url}/students/${id}`

        return axios.delete(url)
    }

    getMunicipalities(): Promise<Object>{
        let url = `${globalConfig.basic_url}/api/municipalities`

        return axios.get(url)
    }
}