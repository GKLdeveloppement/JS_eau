/* Index wanted

Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6


$> python exo.py test test test
0

$> python exo.py test boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]

let args = process.argv.slice(2)
let lastItem = args.length -1
let argWanted = args[lastItem]
let counter = 0
let res = 0


//f() utilisées
function indexWanted(){
    for (let i = 0; i < args.length-1; i++) {

        if (args[i] == argWanted) {
            counter ++
            res = args.indexOf(argWanted)
        }
    }
    if (counter > 1) {
        return 0
    } else {
        return res
    }
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || arg3 == undefined ) {
    console.log("Merci d'entrer au minimum 3 arguments valables");
    return
}

if(!isNaN(arg1) || !isNaN(arg2) || !isNaN(arg3)) {
    console.log("Merci d'entrer une valeur valable");
    return
}

//Parsing


//Traitement
let result = indexWanted()

//Affichage résultat
console.log(result);