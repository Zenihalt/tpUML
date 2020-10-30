import { Droit } from "./droit";
import { Produit } from "./produit";

export class DroitProduit {
    
    produitId: number;
    droitId: number;

    constructor() {
       this.produitId = undefined;
       this.droitId = undefined;
    }
} 