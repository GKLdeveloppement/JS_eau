/* Par ordre Ascii

Créez un programme qui trie les éléments donnés en argument par ordre ASCII.


Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo


$> python exo.py A Z E R T Y
A E R T Y Z

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