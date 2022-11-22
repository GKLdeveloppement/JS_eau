/* Différence minimum absolue


Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.


Exemples d’utilisation :
$> python exo.py 5 1 19 21
2


$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]
let res = 0

//f() utilisées

//Permer de vérifier si les arguments sont bien tous des nombres (pos ou neg)
function isNumber(args){
    let counter = 0
    for (let i = 0; i < args.length; i++) {
        if (args[i].match(nbRegex)) {
            res = true
        } else {
            counter ++
        }        
    }
    return counter
}

//trié correctement le tableau avec .sort()
function compareNb(a, b) {
    return a - b;
}

//main func
function diffMin() {
    let arSort = args.sort(compareNb)

    //arr qui contient les resultats
    let arrRes = []
    //On compare chaque élément avec le suivant et on stock
    for (let i = 0; i < arSort.length-1; i++) {
        let diffNb = Math.abs(arSort[i] - arSort[i+1])
        arrRes.push(diffNb)
    }

    //On return la valeur minimal du tableau
    return res = Math.min(...arrRes);

}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || arg3 == undefined) {
    console.log("Merci d'entrer 3 arguments valables au minimum");
    return
}

if (isNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des chiffres en arguments");
    return
}

//Parsing


//Traitement
let result = diffMin()

//Affichage résultat
console.log(result);