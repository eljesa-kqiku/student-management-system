import {injectable, inject} from "inversify";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";

@injectable()
export default class StudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;

    private vm = {

    }

    constructor() {
        makeAutoObservable(this)
    }

    get studentsList(){
        // TODO: we should find the municipality name from id here
        return this.studentRepository.studentsList
    }

    async init() {
        await this.studentRepository.init()
    }
}