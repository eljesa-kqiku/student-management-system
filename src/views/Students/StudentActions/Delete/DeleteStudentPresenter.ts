import {inject, injectable} from "inversify";
import router from "@/router";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";

@injectable()
export default class DeleteStudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;

    constructor() {
        makeAutoObservable(this)
    }

    goBack(): void {
        router.push({name: 'students'});
    }

    cancel(): void{
        this.goBack()
    }

    async confirm(): Promise<void> {
        await this.studentRepository.deleteStudent(this.studentRepository.currentStudentToModify)
        // todo: notify successful/failed deletion
        this.goBack()
    }
}