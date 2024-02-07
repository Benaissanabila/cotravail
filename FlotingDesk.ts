import {Desk} from "./Desk";
import Personne  from "./Personne";
import {iFullable} from "./interface/iFullable";
import {iAccesable} from "./interface/iAccesable";

/**
 * This file contains the implementation of the FlotingDesk class, which extends the Desk class.
 * It represents a floating desk with a current capacity and maximum capacity.
 * The FlotingDesk class provides methods to check if the desk is full and get the number of occupants.
 */
//l'implementation iaccesable
export class FlotingDesk extends Desk {
    public capaciteActuelle: number ;
    public capaciteMax: number ;

    constructor(deskID: number, isOccupied: boolean, capaciteActuelle: number=0, capaciteMax: number) {
        super(deskID, isOccupied, [], capaciteMax);
        this.capaciteActuelle = capaciteActuelle;
        this.capaciteMax = capaciteMax;
    }

    /**
     * Checks if the floating desk is full.
     * @returns A boolean indicating if the desk is full.
     */
    isFull(): boolean {
        return this.capaciteActuelle === this.capaciteMax;
    }

    /**
     * Gets the number of occupants in the floating desk.
     * @returns The number of occupants.
     */
    getOccupantCount(): number {
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
removeOccupant(person: Personne): void {
    super.removeOccupant(person);
    this.capaciteActuelle--;
}

}

