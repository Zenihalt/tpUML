import { Client } from "./client";

const faker = require('faker');
const fs = require('fs'); 

function genererFichierJSON(){

    let tab = [];
    let newClient;

    for (let index = 1; index <= 5 ; index++) {
        newClient = new Client();
        
        newClient.idClient = faker.random.number();
        newClient.adresse = faker.address.streetAddress();

        newClient.nom = faker.name.lastName();
        newClient.prenom = faker.name.firstName();
        newClient.email = faker.internet.email();

        newClient.rue = faker.address.streetName();
        newClient.ville = faker.address.city();
        newClient.province = faker.address.state();

        newClient.phone = faker.phone.phoneNumber();
        newClient.nomEntreprise = faker.company.companyName();
        newClient.fax = faker.phone.phoneNumber();

        newClient.idContact = faker.random.number();

        tab.push(newClient);
   }
   return { "Clients" :tab};   
}

let webservice = genererFichierJSON();
fs.writeFileSync('clientList.json', JSON.stringify(webservice, null, '\t'));