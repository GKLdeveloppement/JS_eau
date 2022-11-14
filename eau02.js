/*
Créez un programme qui affiche ses arguments reçus à l’envers.

Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis


$> python exo.py ha ho
ho
ha

$> python exo.py “Bonjour 36”
Bonjour 36

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let arrArg =process.argv.slice(2)
let arg1 = process.argv[2]
let resFinal = ""
// console.log(arrArg.length);

//f() utilisées
function reverseArg(){
    for (let i = arrArg.length -1; i >= 0; i--) {
        resFinal += arrArg[i]+ " ";
    }
    return resFinal;
}


//Gestion d'erreurs
if (arg1 == undefined) {
    console.log("Merci d'entrer des arguments valables");
    return
}

//Parsing


//Traitement
let result = reverseArg()

//Affichage résultat
console.log(result);