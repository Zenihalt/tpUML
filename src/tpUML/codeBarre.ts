import { Client } from "./client";
import { Option } from "./option";
import { Produit } from "./produit";

export class CodeBarre {
    
    id: number;
    code: string;
    client: Client;
    option: Array<Option>;
    produit: Array<Produit>;

    constructor() {
        this.id = undefined;
        this.code = undefined;
        this.client = undefined;
        this.option = undefined;
        this.produit = undefined;
    }
} 