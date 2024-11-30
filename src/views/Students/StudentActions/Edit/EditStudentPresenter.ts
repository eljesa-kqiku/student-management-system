import router from "@/router";
import {inject, injectable} from "inversify";
import { TYPES } from '@/ioc/types'
import StudentModel from "@/views/shared/models/StudentModel";
import {makeAutoObservable} from "mobx";
import deepClone from 'clone'

@injectable()
export default class EditStudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;
    @inject(TYPES.StudentModel) studentData

    constructor() {
        makeAutoObservable(this)
    }

    setFirstName(val: string):void{
        this.studentData.first_name = val
    }

    setLastName(val: string):void{
        this.studentData.first_name = val
    }
    setDateOfBirth(val: string):void{
        this.studentData.first_name = val
    }
    setMunicipality(val: string):void{
        this.studentData.first_name = val
    }

    init(): void{
        let student_id = this.studentRepository.currentStudentToModify
        if(student_id) {
            // edit flow
            let std = this.studentRepository.studentsList.find((std: StudentModel) => std.id === student_id)
            this.studentData.id = std.id;
            this.studentData.index = std.index;
            this.studentData.first_name = std.first_name;
            this.studentData.last_name = std.last_name;
            this.studentData.date_of_birth = std.date_of_birth;
            this.studentData.municipality_id = std.municipality_id;
        } else {
            // creation flow
            this.studentData.id = this.generateUUID()
        }
    }

    goBack(): void {
        router.push({name: 'students'});
    }

    // todo: move this to a service
    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    cancel(): void{
        this.goBack()
    }

    async confirm(): Promise<void> {
        await this.studentRepository.editStudent(this.studentData)
        // todo: notify successful/failed update
        this.goBack()
    }
}