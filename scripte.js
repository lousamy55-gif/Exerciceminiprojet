const boutons = document.querySelectorAll("#choices button");
const scoreJoueur = document.querySelector("#scoreJoueur");
const scoreOrdi = document.querySelector("#scoreOrdi");
const message = document.querySelector("#message");
//initialisation des points des joueurs
let joueur = 0;
let ordi = 0;
//différents choix possibles
function choixOrdi() {
    const options = ["pierre", "feuille", "ciseaux"];
    return options[Math.floor(Math.random() * 3)];
}
//vérifier qui à gagné (+égalitée possible)
function verifierGagnant(j, o) {
    if (j === o) return "égalité";
    if (
        (j === "pierre" && o === "ciseaux") ||
        (j === "feuille" && o === "pierre") ||
        (j === "ciseaux" && o === "feuille")
    ) return "gagné";
    return "perdu";
}

boutons.forEach(btn => {
    btn.addEventListener("click", () => {
        const choixJoueur = btn.dataset.choice;
        const choixOrdinateur = choixOrdi();
        //comparer les deux chois ensemble
        const resultat = verifierGagnant(choixJoueur, choixOrdinateur);
 //mettre à jours les compteurs de résultats
        if (resultat === "gagné") joueur++;
        if (resultat === "perdu") ordi++;

        scoreJoueur.textContent = joueur;
        scoreOrdi.textContent = ordi;
//donner les résultats 
        message.textContent = `Tu as ${resultat} ! (Ordi : ${choixOrdinateur})`;

//Message de fin
        if (joueur === 5) {
            message.textContent = " Bravo, tu as gagné la partie !";
            desactiverJeu();
        }
        if (ordi === 5) {
            message.textContent = " L’ordinateur a gagné…";
            desactiverJeu();
        }
    });
});
// Mettre fin au jeu 
function desactiverJeu() {
    boutons.forEach(b => b.disabled = true);
}

