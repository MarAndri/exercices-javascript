/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const getHero = async function () {
        // récupérer l'id dans l'input
        const input = document.getElementById("hero-id").value;
        const response = await fetch(`http://localhost:3000/heroes/${input}`);
        const hero = await response.json();
        // definition de l'élément cible
        const targ = document.getElementById("target");
        console.log(hero)
        if (input == hero.id) {
            // définition de l'élément à cloner
            const tplHero = document.getElementById("tpl-hero");
            // création du clone et de son arborescence
            const heroClon = document.importNode(tplHero.content, true);
            // assignation des valeurs importées du fetch aux balises html
            heroClon.querySelector(".name").innerText = hero.name;
            heroClon.querySelector(".alter-ego").innerText = hero.alterEgo;
            heroClon.querySelector(".powers").innerText = hero.abilities;
            // Attachement du hero à la cible html
            targ.appendChild(heroClon);
        } else {
            const message = "Il n'y a pas de héros à cet id.";
            targ.innerText = message;
        }
    }

    document.getElementById("run").addEventListener("click", getHero);
})();