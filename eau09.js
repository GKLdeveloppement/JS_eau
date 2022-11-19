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
let arg1 = parseInt(process.argv[2])
let arg2 = parseInt(process.argv[3])
let argUnvalaible = process.argv[4]
let res = ""
let suite = 0
let diff = 0


//f() utilisées
function between2nb(){
    
    if (arg1 < arg2) {
        //arg2 + grand
        diff = arg2 - arg1;

        for (let i = 0; i < diff; i++) {
            suite = arg1+i
            res += suite + " "
        }
        
        return res
    } else {
        //arg1 + grand
        diff = arg1 - arg2;

        for (let i = 0; i < diff; i++) {
            suite = arg2+i
            res += suite + " "
        }
        
        return res
    }
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || argUnvalaible !== undefined) {
    console.log("Merci d'entrer que 2 arguments valables");
    return
}

if(isNaN(arg1) || isNaN(arg2)) {
    console.log("Merci d'entrer que des chiffres");
    return
}

if (arg1 == arg2) {
    console.log("Aucune suite n'apparaît car les 2 sont égaux.");
    return
}

//Parsing


//Traitement
let result = between2nb()

//Affichage résultat
console.log(result);