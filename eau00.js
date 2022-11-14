/*
Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.


Exemples d’utilisation :
$> python exo.py
012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
$>

987 n’est pas là parce que 789 est présent.

020 n’est pas là parce que 0 apparaît deux fois.

021 n’est pas là parce que 012 est présent.

000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.

*/

//Initialisation des variables
let limit = 790


//f() utilisées

function centaine(nb){
    let centaine = nb/100;
    return centaine;
}

function dizaine(nb){
    let dizaine = (nb%100)/10;
    return dizaine;
}

function unite(nb){
    let unite = nb % 10;
    return unite
}

function suiteTriple() {
    for (let i = 11; i < limit; i++) {
        //Traitement avant centaine
        if (i <= 99) {
            if ((unite(i) > dizaine(i)) && (unite )) {
                console.log("0"+i);
            } 
        }
        //supérieur à 100
        if(i >=100) {
            if ((unite(i) > dizaine(i)) && (dizaine(i) > centaine(i))) {
                console.log(i);
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
suiteTriple()