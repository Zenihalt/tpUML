Voici mon TP-UML...

Les commandes pour le JSON-SERVER sont dans le fichier commandes_JSON-SERVER.txt

Mes deux fichiers pour faire mes fakers sont ceux-ci : fakerClient.ts , fakerDroitProduit

CECI EST MA REFLEXION (conception)

PHASE 1 :

1. Convertir les Boîtes (Objets) en typeScript
2. Différencier les boîtes ==> s'il y a un nom ITALIc ou une flècle en Pointillé ==> Interface sinon c'est une classe


Total : 11 classes (11 fichiers typeScript); Voici ==>

public class Droit
public class Client
public class Individu
public class Entreprise
public class CodeBar
public class Details
public class Contact
public class Option
public class Produit

PHRASE 2 : Vérifier les stéréotypes <<Interface>>

public enum ClienType
public enum DroitType

PHASE 3 ==> Traduire les relations

Client one one CodeBar

Client one * Droit

Droit * * Produit

Details one one Individu (LOSANGE PLEIN ==> Composition = R OneToOne = une instancation OBLIGATOIRE DANS LE CONSTRUCTEUR)

Option one one Produit (LOSANGE VIDE ==> Agrégation = R OneToOne = PAS OBLIGATOIRE DANS LE CONSTRUCTEUR )
