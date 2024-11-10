export class SortByModel{
    private _key: string
    private _label: string
    private _mode:  SortByType
    private _selected: boolean

    constructor(key: string, label: string, mode: SortByType = SortByType.ASC, selected: boolean = false) {
        this._key = key;
        this._label = label;
        this._mode = mode;
        this._selected = selected;
    }

    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    get mode(): SortByType {
        return this._mode;
    }

    set mode(value: SortByType) {
        this._mode = value;
    }

    get selected(): boolean {
        return this._selected;
    }

    set selected(value: boolean) {
        this._selected = value;
    }
}

export enum SortByType{
    ASC,
    DSC,
}