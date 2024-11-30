import {inject, injectable} from "inversify";
import StudentModel from "../models/StudentModel";
import {makeAutoObservable} from "mobx";
import { TYPES } from "@/ioc/types"
import deepClone from 'clone'

@injectable()
export default class StudentRepository{
    @inject(TYPES.StudentGateway) studentGateway


    private pm = {
        students_list: [],
        current_student_to_modify: ""
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

    get currentStudentToModify(): string{
        return this.pm.current_student_to_modify
    }

    set currentStudentToModify(value: string){
        this.pm.current_student_to_modify = value
    }

    async init(): Promise<void>{
        try{
            let res = await this.studentGateway.fetchAllStudents()
            // todo: add a mapper for this
            this.studentsList = res.data?.map((student: StudentModel) => new StudentModel(
                student.id,
                student.index,
                student.first_name,
                student.last_name,
                student.date_of_birth,
                student.municipality_id,
            ))
        }catch (e){
            // todo: notify error on ui
            this.studentsList = []
            console.error(e)
        }
    }

    async editStudent(studentData: StudentModel): Promise <void>{
        // todo: call the api
        let std  = this.studentsList.findIndex(item => item.id === studentData.id)
        if(std != -1) {
          // edit flow
            this.studentsList[std] = studentData
        } else {
            // create flow
            this.studentsList.push(studentData)
        }
        this.currentStudentToModify = ""
    }

    async deleteStudent(student_id: string): Promise<void>{
        // todo: call the api
        this.studentsList = this.studentsList.filter(item => item.id !== student_id)
        this.currentStudentToModify = ""
    }
}