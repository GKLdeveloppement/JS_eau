/*  String dans string

Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


//Initialisation des variables
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let argUnvalaible = process.argv[4]
let res = ""

//f() utilisées
function stringInString() {
    //On trouve où apparait la première lettre dans le 1er arg
    let indexStart = arg1.indexOf(arg2[0])

    for (let i = indexStart; i < arg1.length; i++) {
        if (arg1[i] == arg2[0]) {
            console.log(i);
            for (let y = 0; y < arg2.length; y++) {
                console.log(y);
                if (arg1[i] == arg2[y]) {
                    res += arg1[i]
                    console.log(res);
                    i++
                } else {
                    break
                }
            }
        }
    }

    // console.log(res);
    if (res == arg2) {
        return true
    } else {
        return false
    }
}


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
let result = stringInString()

//Affichage résultat
console.log(result);