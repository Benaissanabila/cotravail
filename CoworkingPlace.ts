import {Adresse} from "./types/Adresse";
import {iAccesable} from "./interface/iAccesable";
import {iFullable} from "./interface/iFullable";


/**
 * CoworkingPlaca class represents a coworking space with a name, address, and capacity.
 */
export default class CoworkingPlace implements iAccesable,iFullable{

  private name:string;
   private _adresse: Adresse;
   private _numberOfPlaces: number;
   private _phoneNumber: number;
   private _numberOfMembers : number;
    private isOpen: boolean;

    constructor(name:string,adresse:Adresse,numberOfPlaces:number,phoneNumber:number,
   numberOfMembers:number) {
       this.name = name;
       this._adresse = adresse;
       this._numberOfPlaces = numberOfPlaces;
       this._phoneNumber = phoneNumber;
       this._numberOfMembers = numberOfMembers;
        this.isOpen = true;//par default il est ouvert.
   }

    acces(): void {
        if (this.isOpen) {
            console.log(`Welcome to ${this.name}! The coworking space is currently open.`);
        } else {
            console.log(`Sorry, ${this.name} is currently closed.`);
        }
    }
    get numberOfMembers(): number {
        return this._numberOfMembers;
    }
    get phoneNumber(): number {
        return this._phoneNumber;
    }
    get numberOfPlaces(): number {
        return this._numberOfPlaces;
    }
    get adresse(): Adresse {
        return this._adresse;
    }
    getName(): string {
        return this.name;
    }
    isFull(): boolean {
        return this._numberOfMembers === this._numberOfPlaces;
    }

}