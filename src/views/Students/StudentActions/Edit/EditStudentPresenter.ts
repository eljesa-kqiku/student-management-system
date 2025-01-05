import router from "@/router";
import {inject, injectable} from "inversify";
import { TYPES } from '@/ioc/types'
import StudentModel from "@/views/shared/models/StudentModel";
import {makeAutoObservable} from "mobx";
import {ElNotification} from "element-plus";

@injectable()
export default class EditStudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;
    @inject(TYPES.StudentModel) studentData

    constructor() {
        makeAutoObservable(this)
    }

    get isCreationFlow(): boolean{
        let student_id = this.studentRepository.currentStudentToModify
        return !this.studentRepository.studentsList.find((std: StudentModel) => std.id === student_id)
    }

    setFirstName(val: string):void{
        this.studentData.first_name = val
    }

    setLastName(val: string):void{
        this.studentData.last_name = val
    }
    setDateOfBirth(val: string):void{
        this.studentData.date_of_birth = val
    }
    setMunicipality(val: string):void{
        this.studentData.municipality_id = val
    }

    init(): void{
        if(!this.isCreationFlow) {
            // edit flow
            let student_id = this.studentRepository.currentStudentToModify
            let std = this.studentRepository.studentsList.find((std: StudentModel) => std.id === student_id)
            this.studentData.id = std.id;
            this.studentData.index = std.index;
            this.studentData.first_name = std.first_name;
            this.studentData.last_name = std.last_name;
            this.studentData.date_of_birth = std.date_of_birth;
            this.studentData.municipality_id = std.municipality_id;
        }
    }

    goBack(): void {
        router.push({name: 'students'});
    }

    cancel(): void{
        this.goBack()
    }

    async confirm(): Promise<void> {
        try{
            if(this.isCreationFlow){
                await this.studentRepository.createStudent(this.studentData)
            }else {
                await this.studentRepository.editStudent(this.studentData)
            }
            this.goBack()
            ElNotification({
                title: 'Success',
                message: `User was ${this.isCreationFlow ? 'created' : 'updated'} successfully!`,
                type: 'success',
            })
        }catch (e){
            console.log(e)
            ElNotification({
                title: 'Error',
                message: `User could not be ${this.isCreationFlow ? 'created' : 'modified'}!`,
                type: 'error',
            })
        }

    }
}