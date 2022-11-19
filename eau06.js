/*  Majuscule sur deux

Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/


//Initialisation des variables
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""
let step = 0

//f() utilisées
function majSur2() {
    arg1 = arg1.toLowerCase()
    
    for (let i = 0; i < arg1.length; i++) {
        //si index pair on met en maj (car arr commence à 0)
        
        if (arg1[i] == " ") {
            step = step -1
        }

        if (step % 2 == 0) {
            res += arg1[i].toUpperCase()
        } else {
            res+= arg1[i]
        }
        step ++
    }

    return res
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 !== undefined) {
    console.log("Merci d'entrer 2 arguments valables");
    return
}

if(!isNaN(arg1) || !isNaN(arg2)) {
    console.log("Merci d'entrer une valeur valable");
    return
}


//Parsing

//Traitement
let result = majSur2()

//Affichage résultat
console.log(result);