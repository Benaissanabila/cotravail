"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personne {
    constructor(Id, fullname) {
        this._Id = Id;
        this._fullname = fullname;
    }
    get fullname() {
        return this._fullname;
    }
    get Id() {
        return this._Id;
    }
}
exports.default = Personne;
