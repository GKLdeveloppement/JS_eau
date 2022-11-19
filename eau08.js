/*  Chiffres only

Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

Exemples d’utilisation :
$> python exo.py “4445353”
true

$> python exo.py 42
true

$> python exo.py “Bonjour 36”
false

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//Initialisation des variables
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = 0
let nbRegex = /^\d+$/

//f() utilisées
function isNumber(){
    if (arg1.match(nbRegex)) {
        res = true
        return res
    } else {
        return false
    }
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 !== undefined) {
    console.log("Merci d'entrer qu'un arguments valables");
    return
}

//Parsing


//Traitement
let result = isNumber()

//Affichage résultat
console.log(result);