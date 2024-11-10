import {id} from "inversify";

export default class StudentModel {
    private _id: string;
    private _index: number;
    private _first_name: string;
    private _last_name: string;
    private _date_of_birth: string;
    private _municipality_id: string;


    constructor(id: string, index: number = 0,
                first_name: string = '', last_name: string = '',
                date_of_birth: string = '', municipality_id: string = '') {
        this._id = id;
        this._index = index;
        this._first_name = first_name;
        this._last_name = last_name;
        this._date_of_birth = date_of_birth;
        this._municipality_id = municipality_id;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }

    get first_name(): string {
        return this._first_name;
    }

    set first_name(value: string) {
        this._first_name = value;
    }

    get last_name(): string {
        return this._last_name;
    }

    set last_name(value: string) {
        this._last_name = value;
    }

    get date_of_birth(): string {
        return this._date_of_birth;
    }

    set date_of_birth(value: string) {
        this._date_of_birth = value;
    }

    get municipality_id(): string {
        return this._municipality_id;
    }

    set municipality_id(value: string) {
        this._municipality_id = value;
    }
}