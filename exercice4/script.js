
// faire un programme quand on clique sur le boutton "pile ou face" le programmme aléatoirement pile ou face

document.querySelector ('button').addEventListener ('click', function () {
    document.querySelector ('h1').innerHTML = "pile ou face";

    let random = Math.floor(Math.random() * 2);
    
    if (random == 0) {
        document.querySelector ('h1').innerHTML = "pile";
    } else {
        document.querySelector ('h1').innerHTML = "face";

    }

    }

    )
