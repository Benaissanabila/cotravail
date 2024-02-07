"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlotingDesk = void 0;
const Desk_1 = require("./Desk");
/**
 * This file contains the implementation of the FlotingDesk class, which extends the Desk class.
 * It represents a floating desk with a current capacity and maximum capacity.
 * The FlotingDesk class provides methods to check if the desk is full and get the number of occupants.
 */
//l'implementation iaccesable
class FlotingDesk extends Desk_1.Desk {
    constructor(deskID, isOccupied, capaciteActuelle = 0, capaciteMax) {
        super(deskID, isOccupied, [], capaciteMax);
        this.capaciteActuelle = capaciteActuelle;
        this.capaciteMax = capaciteMax;
    }
    /**
     * Checks if the floating desk is full.
     * @returns A boolean indicating if the desk is full.
     */
    isFull() {
        return this.capaciteActuelle === this.capaciteMax;
    }
    /**
     * Gets the number of occupants in the floating desk.
     * @returns The number of occupants.
     */
    getOccupantCount() {
        return this.getOccupant().length;
    }
    /**
     *
     * @param person
     */
    /**
 * Removes an occupant from the FloatingDesk.
 * Decreases the current capacity of the FloatingDesk by one.
 *
 * @param person - The person to be removed from the FloatingDesk.
 */
    //faire une interface de removeoccupant ??
    removeOccupant(person) {
        super.removeOccupant(person);
        this.capaciteActuelle--;
    }
}
exports.FlotingDesk = FlotingDesk;
