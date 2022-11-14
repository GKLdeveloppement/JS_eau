/*
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.

Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/


//Initialisation des variables
let arg1 = process.argv[2]
let arg1Decimal = arg1.toString()
let arg2 = process.argv[3]
const suiteFabo = [0, 1, 1, 2, 3, 5, 8, 13, 21]
let nbArg1 = parseInt(arg1);
let resFinal = 0
// console.log(arrArg.length);

//f() utilisées
function reverseArg(arg1){
    resFinal = suiteFabo[arg1]
    return resFinal;
}


//Gestion d'erreurs
if (arg1 == undefined || arg1 < 0 || isNaN(nbArg1)) {
    console.log("Merci d'entrer des arguments valables");
    return
}

if(arg1.indexOf(".") == 1) {
    console.log("Merci d'entrer un chiffre entier valable");
    return
}

if (arg2 !== undefined) {
    console.log("Merci d'entrer qu'un argument");
    return
}

//Parsing


//Traitement
let result = reverseArg(arg1)

//Affichage résultat
console.log(result);