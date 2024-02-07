"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desk = void 0;
class Desk {
    /**
     * Creates a new instance of the Desk class.
     * @param deskID The ID of the desk.
     * @param isOccupied Indicates if the desk is occupied.
     * @param occupant The occupants of the desk.
     */
    constructor(deskID, isOccupied, occupant, capaciteMax) {
        this.isOccupied = false;
        this.deskID = deskID;
        this.isOccupied = isOccupied;
        this.occupant = occupant;
        this.capaciteMax = capaciteMax;
    }
    /**
     * Gets the occupants of the desk.
     * @returns An array of occupants.
     */
    getOccupant() {
        return this.occupant;
    }
    /**
     * Add a person to the desk.
     * @param person The person to add.
     */
    addOccupant(person) {
        if (this.occupant.length < this.capaciteMax) {
            this.occupant.push(person);
            this.isOccupied = true;
        }
        else {
            console.log(`Le bureau ${this.deskID} est déjà plein.`);
        }
    }
    /**
     * Check the accessibility of the desk.
     */
    acces() {
        if (this.isOccupied) {
            console.log(`Le bureau ${this.deskID} est occupé.`);
        }
        else {
            console.log(`Le bureau ${this.deskID} est disponible.`);
            /**
             * Remove a person from the desk.
             * @param person The person to remove.
             */
        }
    }
    removeOccupant(person) {
        const index = this.occupant.indexOf(person);
        if (index >= 0) {
            this.occupant.splice(index, 1);
        }
        this.isOccupied = this.occupant.length > 0;
    }
    /**
     * Get the occupants of the desk.
     * @returns An array of occupants.
     */
    getOccupants() {
        return this.occupant;
    }
    isFull() {
        return this.occupant.length >= this.capaciteMax;
    }
}
exports.Desk = Desk;
