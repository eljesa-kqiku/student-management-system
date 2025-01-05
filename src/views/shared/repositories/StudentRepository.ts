import {inject, injectable} from "inversify";
import StudentModel from "../models/StudentModel";
import {makeAutoObservable} from "mobx";
import { TYPES } from "@/ioc/types"

@injectable()
export default class StudentRepository{
    @inject(TYPES.StudentGateway) studentGateway


    private pm = {
        students_list: [],
        municipalities: [],
        current_student_to_modify: "",
        loading: true
    }

    constructor() {
        makeAutoObservable(this)
    }

    get loading(): boolean{
        return this.pm.loading
    }

    set loading(val: boolean): void{
        this.pm.loading = val
    }

    get studentsList(): StudentModel[]{
        return this.pm.students_list
    }

    set studentsList(value: StudentModel[]){
        this.pm.students_list = value
    }

    get currentStudentToModify(): string{
        return this.pm.current_student_to_modify
    }

    set currentStudentToModify(value: string){
        this.pm.current_student_to_modify = value
    }

    get municipalities(){
        return this.pm.municipalities
    }

    set municipalities(value: Object[]){
        this.pm.municipalities = value
    }

    async init(): Promise<void>{
        this.loading = true
        await this.getAllStudents()
        await this.getMunicipalities()
        this.loading = false
    }

    async getAllStudents(): Promise<void>{
        let res = await this.studentGateway.fetchAllStudents()
        this.studentsList = res.data?.map((student: StudentModel) => new StudentModel(
            student.id,
            student.index,
            student.first_name,
            student.last_name,
            student.date_of_birth?.split('T')?.[0],
            student.municipality_id,
        ))
    }

    async getStudentById(id: String): Promise<StudentModel>{
        let res = await this.studentGateway.getStudentById(id)
        let student = res.data
        return new StudentModel(
            student.id,
            student.index,
            student.first_name,
            student.last_name,
            student.date_of_birth,
            student.municipality_id,
        )
    }

    async editStudent(studentData: StudentModel): Promise <void>{
        let data = await this.studentGateway.editStudent(studentData.id, studentData)
        await this.refreshData()
        return data
    }

    async createStudent(studentData: StudentModel): Promise <void>{
        let data = await this.studentGateway.createStudent(studentData)
        await this.refreshData()
        return data
    }

    async deleteStudent(student_id: string): Promise<void>{
        let data = await this.studentGateway.deleteStudent(student_id)
        await this.refreshData()
        return data
    }

    async refreshData(): Promise<void>{
        this.loading = true
        this.currentStudentToModify = ""
        await this.getAllStudents()
        this.loading = false
    }

    async getMunicipalities(): Promise<void>{
        let res = await this.studentGateway.getMunicipalities()
        this.municipalities = res.data
    }
}