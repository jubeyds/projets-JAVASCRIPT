// Afficher bonjour !

document.querySelector ('h1').innerHTML = 'Bonjour !';

document.querySelector ('h1').style.color = 'red';

// -----------------------------------------------------------------------------

// faire un fond bleu dans le formulaire avec un fond bleu pour nom et un rouge pour prenom qui change de couleur quand on ecris dedans 


let inputNom = document.querySelector ('#nom');
let inputPrenom = document.querySelector ('#prenom');

inputNom.style.background = 'blue';
inputPrenom.style.background = 'red';
