import router from "@/router";
import {inject, injectable} from "inversify";
import { TYPES } from '@/ioc/types'
import StudentModel from "@/views/shared/models/StudentModel";
import {makeAutoObservable} from "mobx";

@injectable()
export default class EditStudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;

    vm = {
        student_data: {}
    }

    constructor() {
        makeAutoObservable(this)
    }

    get studentData(): StudentModel {
        return this.vm.student_data;
    }

    set studentData(value: StudentModel) {
        this.vm.student_data = value;
    }

    init(): void{
        let student_id = this.studentRepository.currentStudentToModify
        if(student_id) {
            // edit flow
            this.studentData = this.studentRepository.studentsList.find((std: StudentModel) => std.id === student_id)
        } else {
            // creation flow
            this.studentData = new StudentModel(this.generateUUID())
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
        // todo: notify successful/failed deletion
        this.goBack()
    }
}