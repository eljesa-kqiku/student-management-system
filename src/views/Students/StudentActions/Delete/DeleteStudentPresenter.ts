import {inject, injectable} from "inversify";
import router from "@/router";
import { TYPES } from '@/ioc/types'

@injectable()
export default class DeleteStudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;

    goBack(): void {
        router.push({name: 'students'});
    }

    async confirm(): Promise<void> {
        await this.studentRepository.deleteStudent(this.studentRepository.currentStudentToModify)
        // todo: notify successful/failed deletion
        this.goBack()
    }
}