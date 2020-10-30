import { ClientType } from "./clientType";
import { Droit } from "./droit";

export class Client {
    
    idClient: number;
    type: ClientType;
    adresse: string;
    droit: Array<Droit>;

    constructor() {
        this.idClient = undefined;
        this.type = undefined;
        this.adresse = undefined;
        this.droit = undefined;
    }

} 