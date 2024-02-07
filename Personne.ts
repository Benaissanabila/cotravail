export default class Personne {

    private _Id :number;
    private _fullname : string;
    constructor(Id:number,fullname:string) {
        this._Id = Id;
        this._fullname = fullname;
    }
    get fullname(): string {
        return this._fullname;
    }
    get Id(): number {
        return this._Id;
    }
}
