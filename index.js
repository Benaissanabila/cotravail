"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personne_1 = __importDefault(require("./Personne"));
const Desk_1 = require("./Desk");
const FlotingDesk_1 = require("./FlotingDesk");
const personne1 = new Personne_1.default(23, "Jean Tremblay");
const desk1 = new Desk_1.Desk(1, false, [personne1], 1);
console.log('Le bureau est-il plein?');
console.log(desk1.isFull());
//retirer une personne
desk1.removeOccupant(personne1);
desk1.acces();
const flotingDesk = new FlotingDesk_1.FlotingDesk(1, false, 0, 3);
const personne4 = new Personne_1.default(22, "Isabelle");
const personne2 = new Personne_1.default(44, "bob");
const personne3 = new Personne_1.default(48, "Martin");
flotingDesk.addOccupant(personne4);
flotingDesk.addOccupant(personne2);
flotingDesk.addOccupant(personne3);
flotingDesk.getOccupantCount();
console.log("Le bureau flottant est-il plein?", flotingDesk.isFull());
flotingDesk.removeOccupant(personne1);
