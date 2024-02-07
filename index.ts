import Personne from "./Personne";
import {Desk} from "./Desk";
import {FlotingDesk} from "./FlotingDesk";

const personne1 = new Personne(23,"Jean Tremblay");
const desk1 = new Desk(1,false,[personne1],1);
console.log('Le bureau est-il plein?');
console.log(desk1.isFull());
//retirer une personne
desk1.removeOccupant(personne1);
desk1.acces();
const flotingDesk = new FlotingDesk(1, false, 0, 3);
const personne4 = new Personne(22,"Isabelle");
const personne2 = new Personne(44,"bob");
const personne3 = new Personne(48,"Martin");
flotingDesk.addOccupant(personne4);
flotingDesk.addOccupant(personne2);
flotingDesk.addOccupant(personne3);
flotingDesk.getOccupantCount();
console.log("Le bureau flottant est-il plein?",flotingDesk.isFull());
flotingDesk.removeOccupant(personne1);