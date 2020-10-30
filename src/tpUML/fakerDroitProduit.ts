import { DroitProduit } from "./droitProduit";

const faker = require('faker');
const fs = require('fs'); 

function genererFichierJSON(){

    let tab = [];
    let droitProd;

    for (let index = 1; index <= 5 ; index++) {
        droitProd = new DroitProduit();
        
        droitProd.droitId = faker.random.number();
        droitProd.produitId = faker.random.number();

        tab.push(droitProd);
   }
   return { "Droit-Produit" :tab};   
}

let webservice = genererFichierJSON();
fs.writeFileSync('droitProd.json', JSON.stringify(webservice, null, '\t'));