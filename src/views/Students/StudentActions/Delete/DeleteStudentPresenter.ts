import {inject, injectable} from "inversify";
import router from "@/router";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";
import {ElNotification} from "element-plus";

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
        try{
            await this.studentRepository.deleteStudent(this.studentRepository.currentStudentToModify)
            this.goBack()
            ElNotification({
                title: 'Success',
                message: `User was deleted successfully!`,
                type: 'success',
            })
        }catch (e) {
            console.log(e)
            ElNotification({
                title: 'Error',
                message: `Unable to delete user!`,
                type: 'error',
            })
        }
    }
}