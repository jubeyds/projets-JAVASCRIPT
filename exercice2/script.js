// afficher "introduction au document objet model" dans h2

document.querySelector ('h2').innerHTML = 'Introduction au document objet model';

// faire un programme quand on clique sur le bouton incrementer un compteur affiche " vous avez cliqué " dans h3 le nombre de clicks

const btn = document.querySelector ('button');
const maDiv = document.querySelector ('div');

// on declare une variable qui va concerver le nombre de cliks

let compteur = 0;

function incrementer () {
    // on incremente à chaque clic

    compteur++;

    // Reste à renseigner dans la div l'information du nombre de click 

    maDiv.innerHTML = "vous avez cliqué " + compteur;
}

btn.addEventListener ('click', incrementer);
