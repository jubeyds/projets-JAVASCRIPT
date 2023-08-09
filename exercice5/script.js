// le password doit contenir 8 caractères minimum, une majuscule et minuscule minimum, 
// une caractère spécial, et un chiffre minimum.


function validerFormulaire() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    if (email.trim() === "" || password.trim() === "") {
        afficherMessageErreur("Veuillez remplir tous les champs.");
        return false;
    }

    if (password.length < 8) {
        afficherMessageErreur("Le mot de passe doit contenir au moins 8 caractères.");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        afficherMessageErreur("Le mot de passe doit contenir au moins une lettre majuscule.");
        return false;
    }

    if (!/[a-z]/.test(password)) {
        afficherMessageErreur("Le mot de passe doit contenir au moins une lettre minuscule.");
        return false;
    }

    if (!/\d/.test(password)) {
        afficherMessageErreur("Le mot de passe doit contenir au moins un chiffre.");
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        afficherMessageErreur("Le mot de passe doit contenir au moins un caractère spécial.");
        return false;
    }

    afficherMessageValidation("Formulaire valide !");
    return true;
}

function afficherMessageErreur(message) {
    var messageElement = document.getElementById("message");
    messageElement.style.color = "red";
    messageElement.textContent = message;
}

function afficherMessageValidation(message) {
    var messageElement = document.getElementById("message");
    messageElement.style.color = "green";
    messageElement.textContent = message;
}






