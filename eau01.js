/*
Combinaison de 2 nombres

Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>

*/

//Initialisation des variables
let limit = 99


//f() utilisées
function combinaisonDouble() {
    for (let i = 0; i <= limit-1; i++) {
        for (let y = 1; y <= limit; y++) {

            //vérifier que i et y se suivent
            if (i < y) {
                //Cas 1 : les deux sont inf à 9
                if(i <= 9 && y <= 9) {
                    console.log("0"+i+ " 0"+ y);
                }
                //Cas 2 : que i prends 0
                if (i <= 9 && y > 9) {
                    console.log("0"+i+ " "+ y);
                }
                //Cas 3 : que y prends un 0
                if (i > 9 && y <= 9) {
                    console.log(i+ " 0"+ y);
                }
                //Cas 4 : aucun des deux
                if (i > 9 && y > 9) {
                    console.log(i+" "+ y);
                }
            }
        }
    }
}

//Gestion d'erreurs
let arg =process.argv[2]

if (arg !== undefined) {
    console.log("Aucun arguemnt ne sera accepté");
    return
}

//Parsing


//Traitement


//Affichage résultat
let result = combinaisonDouble()