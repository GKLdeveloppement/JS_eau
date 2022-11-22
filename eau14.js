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
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/

//f() utilisées
function isNotNumber(args){
    let counter = 0
    for (let i = 0; i < args.length; i++) {
        if (args[i].match(nbRegex)) {
            counter ++
        } else {
            
            res = true
        }        
    }
    return counter
}


//Main f()
function triASCII(arr){

    let arrSort = [...arr]

    for (let i = 0; i < arrSort.length-1; i++) {
        //-1 car le dernier élément sera à sa place

        for (let y = 0; y < (arrSort.length -i -1); y++) {

            let ascii_1 = (arrSort[y]).charCodeAt(0);
            let ascii_2 = (arrSort[y+1]).charCodeAt(0);

            //On vérifie si les deux sont dans l'ordre
            if ((arrSort[y]).charCodeAt(0) > (arrSort[y+1]).charCodeAt(0)) {
                //on défini un var temporaire pour ne pas perdre la valeur qui va ensuite etre modifié
                let temp = arrSort[y]
                arrSort[y] = arrSort[y+1]
                arrSort[y+1] = temp
            }
        }
    
    }
    
    return arrSort
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined) {
    console.log("Merci d'entrer 2 arguments minimum valables");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des lettres/mots en arguments");
    return
}

//Parsing


//Traitement
let result = triASCII(args).join(" ")

//Affichage résultat
console.log(result);