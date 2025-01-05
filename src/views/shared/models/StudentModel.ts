import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
@injectable()
export default class StudentModel {
    id: string;
    index: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    municipality_id: string;


    constructor(id: string, index: number = 0,
                first_name: string = '', last_name: string = '',
                date_of_birth: string = '', municipality_id: string = '') {
        this.id = id;
        this.index = index;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.municipality_id = municipality_id;
        makeAutoObservable(this)
    }
}