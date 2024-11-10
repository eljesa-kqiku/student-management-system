import {injectable, inject} from "inversify";
import { TYPES } from '@/ioc/types'
import {makeAutoObservable} from "mobx";
import StudentModel from "../shared/models/StudentModel";
import router from "@/router";
import deepClone from 'clone'
import { SortByModel, SortByType } from "../shared/models/SortByModel";
import {snakeToTitleCase} from "../shared/services/utility-service";
@injectable()
export default class StudentPresenter {
    @inject(TYPES.StudentRepository) studentRepository;

    // todo: fix the sort by property as an enum/model
    private vm: {
        query_string: string,
        sort_by_properties: SortByModel[]
    } = {
        query_string: "",
        sort_by_properties: []
    }

    constructor() {
        makeAutoObservable(this)
    }

    get queryString(): string{
        return this.vm.query_string
    }

    set queryString(val: string){
        this.vm.query_string = val
    }

    get sortByProperties(): SortByModel[]{
        return this.vm.sort_by_properties
    }

    set sortByProperties(val:SortByModel[]){
        this.vm.sort_by_properties = val
    }

    get sortByKeys(){
        return ["index", "first_name", "last_name", "date_of_birth", "municipality"]
    }

    get studentsList(): StudentModel[]{
        // TODO: we should find the municipality name from id here
        return this.studentRepository.studentsList
    }

    get filteredStudentList(): StudentModel[]{
        if(this.studentsList?.length === 0)
            return []
        let filteredData = deepClone(this.studentsList)

        // filtering
        if(this.queryString?.length > 0) {
            console.log("there is a query")
            let query = this.queryString.toLowerCase();
            const keys: string[] = ["index", "first_name", "last_name"]
            filteredData = this.studentsList?.filter((std: StudentModel) => {
                for (let key of keys) {
                    console.log({key, val: std[key]})
                    if((std[key]).toString()?.toLowerCase().includes(query))
                        return true
                }
            })
        }

        // sorting
        // let sortKeys: SortByModel[] = this.sortByProperties?.filter(p => p.selected)
        // if(sortKeys?.length > 0){
        //     console.log({sortKeys})
        //     for(let sortKey of sortKeys){
        //         filteredData = filteredData.sort((a: StudentModel, b: StudentModel) => a[sortKey.key].localeCompare(b[sortKey.key]))
        //     }
        // }

        return filteredData
    }

    async init(): Promise<void> {
        await this.studentRepository.init()
        
        this.sortByProperties = this.sortByKeys
            ?.map(key => new SortByModel(key, snakeToTitleCase(key)))
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