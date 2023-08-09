
document.addEventListener("DOMContentLoaded", function() {

    // Lorsque le contenu du document est chargé

    const champResultat = document.getElementById("result");

    // Récupérer l'élément avec l'ID "result" et le stocker dans la variable champResultat
    
    const boutons = document.getElementsByClassName("buttons")[0];

    // Récupérer le premier élément avec la classe "buttons" et le stocker dans la variable boutons
  
    boutons.addEventListener("click", function(event) {

      // Ajouter un écouteur d'événements pour le clic sur les boutons
      
      const valeurBouton = event.target.textContent;

      // Récupérer la valeur du bouton cliqué à partir de son contenu 
      
      gererClicBouton(valeurBouton);

      // Appeler la fonction gererClicBouton avec la valeur du bouton cliqué comme argument 
    });
  
    function gererClicBouton(valeur) {

      // Fonction pour gérer le clic sur les boutons
      
      switch (valeur) {

        // Vérifier la valeur du bouton
        
        case "=":

          // Si la valeur est "=", appeler la fonction calculer

          calculer();
          break;
          
        case "C":

          // Si la valeur est "C", appeler la fonction effacerResultat

          effacerResultat();
          break;
          
        default:

          // Pour toutes les autres valeurs, appeler la fonction ajouterValeur

          ajouterValeur(valeur);
      }
    }
  
    function ajouterValeur(valeur) {

      // Fonction pour ajouter une valeur au champ de texte
      
      champResultat.value += valeur;

      // Ajouter la valeur du bouton à la fin du champ de texte champResultat
    }
  
    function calculer() {

      // Fonction pour effectuer le calcul de l'expression
      
      const expression = champResultat.value;

      // Récupérer l'expression du champ de texte champResultat
      
      try {

        // Essayer d'évaluer l'expression avec la fonction eval

        const resultat = eval(expression);

        // Stocker le résultat dans la variable resultat
        
        champResultat.value = resultat;

        // Mettre à jour le champ de texte champResultat avec le résultat

      } catch (erreur) {

        // En cas d'erreur lors de l'évaluation

        champResultat.value = "Erreur";

        // Afficher le message "Erreur" dans le champ de texte champResultat
      }
    }
  
    function effacerResultat() {

      // Fonction pour effacer le champ de texte
      
      champResultat.value = "";

      // Effacer le contenu du champ de texte champResultat
    }
});


