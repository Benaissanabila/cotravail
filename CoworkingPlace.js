"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CoworkingPlaca class represents a coworking space with a name, address, and capacity.
 */
class CoworkingPlace {
    constructor(name, adresse, numberOfPlaces, phoneNumber, numberOfMembers) {
        this.name = name;
        this._adresse = adresse;
        this._numberOfPlaces = numberOfPlaces;
        this._phoneNumber = phoneNumber;
        this._numberOfMembers = numberOfMembers;
        this.isOpen = true; //par default il est ouvert.
    }
    acces() {
        if (this.isOpen) {
            console.log(`Welcome to ${this.name}! The coworking space is currently open.`);
        }
        else {
            console.log(`Sorry, ${this.name} is currently closed.`);
        }
    }
    get numberOfMembers() {
        return this._numberOfMembers;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    get numberOfPlaces() {
        return this._numberOfPlaces;
    }
    get adresse() {
        return this._adresse;
    }
    getName() {
        return this.name;
    }
    isFull() {
        return this._numberOfMembers === this._numberOfPlaces;
    }
}
exports.default = CoworkingPlace;
