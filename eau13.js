/*  Tri par sélection

Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6


$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]
let res = false
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/

//f() utilisées
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

//Main f()
function selectSort(arr) {
    let arrSort = [...arr]
    for (let i = 0; i < (arrSort.length -1); i++) {
        let min = i
        for (let j = i+1; j < (arrSort.length); j++) {
            if(parseInt(arrSort[j]) < parseInt(arrSort[min])) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arrSort[i]
            arrSort[i] = arrSort[min]
            arrSort[min]= temp
        }
    }
    return arrSort
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
let result = selectSort(args).join(" ")

//Affichage résultat
console.log(result);