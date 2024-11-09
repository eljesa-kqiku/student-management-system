import {injectable, inject} from "inversify";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";
import StudentModel from "../shared/models/StudentModel";
import router from "@/router";
@injectable()
export default class StudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;

    private vm = {

    }

    constructor() {
        makeAutoObservable(this)
    }

    get studentsList(): StudentModel[]{
        // TODO: we should find the municipality name from id here
        return this.studentRepository.studentsList
    }

    async init(): Promise<void> {
        await this.studentRepository.init()
    }

    createStudent(): void{
        this.studentRepository.currentStudentToModify = ""
        router.push({name: 'create-student'})
    }

    editStudent(student_id: string): void{
        this.studentRepository.currentStudentToModify = student_id
        router.push({name: 'edit-student'})
    }
    
    deleteStudent(student_id: string): void{
        this.studentRepository.currentStudentToModify = student_id
        router.push({name: 'delete-student'})
    }
}