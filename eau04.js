/* Prochain nombre premier

Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


Exemples d’utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif ou mauvais.

*/


//Initialisation des variables
let arg1 = process.argv[2]
let arg2 = process.argv[3]

//Le + grand nombre premier est énorme pour le bien de nos machines on va se limiter à celui-ci
let higherPremier = 199


let resFinal = 0

//f() utilisées
function nbPremier() {
    let div2 = (arg1/2).toString()
    let div3 = (arg1/3).toString()
    let div5 = (arg1/5).toString()
    let div7 = (arg1/7).toString()

    // let sqrtArg = Math.sqrt(arg1).toString()

    if (arg1 == 2 || arg1 == 3 || arg1 == 5 || arg1 == 7) { 
        return arg1 + " est un nombre premier";
    }


    //Pas divisible par 2 ni 3 ni 5 ni 7 sans avoir de "." donc entier non décimal donc pas premier
    if (div2.indexOf(".") == -1 || div3.indexOf(".") == -1 ||div5.indexOf(".") == -1 || div7.indexOf(".") == -1 ) {
        //Peut-être que cette partie est refactorable
        for (let i = arg1; i < higherPremier; i++) {

            //On refait les test avec la valeur i qui s'incrémente jusqu'a ne pas passer dans le test = c'est un nb premier
            div2 = (i/2).toString()
            div3 = (i/3).toString()
            div5 = (i/5).toString()
            div7 = (i/7).toString()


            if (div2.indexOf(".") == -1 || div3.indexOf(".") == -1 ||div5.indexOf(".") == -1 || div7.indexOf(".") == -1 ) {
                //On ne fait rien on continue à incrémenter car nb pas premier
            } else {
                return i + " est le nombre premier le plus proche"
            }
        }

    } else {
        return arg1 + " est un nombre premier";

    }      
}

//Gestion d'erreurs
if (isNaN(arg1) || Math.sign(arg1) !== 1) {
    console.log("Merci d'entrer un nombre entier positif")
    return
}

if (arg1 < 2) {
    console.log("Entrer un nombre supérieur à 2.")
    return
}

if (process.argv[3] !== undefined) {
    console.log("Merci de n'entrer qu'un seul argument")
    return
}

//Parsing


//Traitement
let result = nbPremier(arg1);

// result == -1 ? nextPremier(arg1) : //rien



//Affichage résultat
console.log(result);