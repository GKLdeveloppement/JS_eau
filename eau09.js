/*  Entre min et max

Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
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