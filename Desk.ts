import CoworkingPlace from "./CoworkingPlace";
import {Adresse} from "./types/Adresse";
import Personne  from "./Personne";
import {iAccesable} from "./interface/iAccesable";
import {iFullable} from "./interface/iFullable";


export class Desk implements iAccesable, iFullable{
    protected deskID: number;
   protected isOccupied: boolean = false;
    protected occupant: Personne[];
    protected capaciteMax: number;

    /**
     * Creates a new instance of the Desk class.
     * @param deskID The ID of the desk.
     * @param isOccupied Indicates if the desk is occupied.
     * @param occupant The occupants of the desk.
     */
    constructor(deskID: number, isOccupied: boolean, occupant: Personne[],capaciteMax:number) {
        this.deskID = deskID;
        this.isOccupied = isOccupied;
        this.occupant = occupant;
        this.capaciteMax=capaciteMax;
    }

    /**
     * Gets the occupants of the desk.
     * @returns An array of occupants.
     */
    getOccupant(): Personne[] {
        return this.occupant;
    }
    /**
     * Add a person to the desk.
     * @param person The person to add.
     */
    public addOccupant(person: Personne) {
        if (this.occupant.length < this.capaciteMax) {
            this.occupant.push(person);
            this.isOccupied = true;
        } else {
            console.log(`Le bureau ${this.deskID} est déjà plein.`);
        }
    }

    /**
     * Check the accessibility of the desk.
     */
    acces(): void {
        if (this.isOccupied) {
            console.log(`Le bureau ${this.deskID} est occupé.`);
        } else {
            console.log(`Le bureau ${this.deskID} est disponible.`);

            /**
             * Remove a person from the desk.
             * @param person The person to remove.
             */
        }
    }
    public removeOccupant(person: Personne) {
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
    public getOccupants(): Personne[] {
        return this.occupant;
    }

    isFull(): boolean {
        return this.occupant.length >= this.capaciteMax;
    }
}




