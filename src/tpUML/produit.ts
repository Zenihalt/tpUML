import { Option } from "./option";

export class Produit {
    
    idProduit: number;
    nom: string;
    description: string;
    produit: Produit;
    option: Option;

    constructor(option: Option) {
        this.idProduit = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.option = option;
        this.produit = new Produit(option);
    }

} 