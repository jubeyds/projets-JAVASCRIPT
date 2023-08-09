// afficher le table de multiplication de 3 quand on clic sur le bouton multiplication

document.querySelector ('button').addEventListener ('click', function () {
    document.querySelector ('h3').innerHTML = "table de multiplication de 3";

    for (let i = 1; i <= 10; i++) {
        document.querySelector ('h3').innerHTML += i + " x 3 = " + i * 3 + "<br>";
        
    }

})
