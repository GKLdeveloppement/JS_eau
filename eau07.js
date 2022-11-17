/*  Majuscule
Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""

//f() utilisées


//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || argUnvalaible !== undefined) {
    console.log("Merci d'entrer 2 arguments valables");
    return
}

if(!isNaN(arg1) || !isNaN(arg2)) {
    console.log("Merci d'entrer une valeur valable");
    return
}

//Parsing


//Traitement
let result = ()

//Affichage résultat
console.log(result);