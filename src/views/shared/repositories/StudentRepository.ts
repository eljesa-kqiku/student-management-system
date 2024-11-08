import {inject, injectable} from "inversify";
import StudentModel from "../models/StudentModel";
import {makeAutoObservable} from "mobx";
import { TYPES } from "@/ioc/types"

@injectable()
export default class StudentRepository{
    @inject(TYPES.StudentGateway) studentGateway

    private pm = {
        students_list: [],
    }

    constructor() {
        makeAutoObservable(this)
    }

    get studentsList(): StudentModel[]{
        return this.pm.students_list
    }

    set studentsList(value:StudentModel[]){
        this.pm.students_list = value
    }

    async init(){
        try{
            let res = await this.studentGateway.fetchAllStudents()
            // todo: add a mapper for this
            this.studentsList = res.data?.map((student): Object => new StudentModel(
                student.id,
                student.index,
                student.first_name,
                student.last_name,
                student.date_of_birth,
                student.municipality_id,
            ))
        }catch (e){
            // todo: notify error on ui
            console.error(e)
        }
    }
}