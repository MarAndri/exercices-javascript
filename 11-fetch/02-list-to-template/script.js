/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // assignation d'une fonction anonyme asynchrone à une variable
    const getHeroes = async function () {
        let response = await fetch("http://localhost:3000/heroes");
        let heroes = await response.json();
        // definition de l'élément cible
        const targ = document.getElementById("target");
        // définition de l'élément à cloner
        const tplHero = document.getElementById("tpl-hero");
        heroes.forEach(hero => {
            // création du clone et de son arborescence
            const heroClon = document.importNode(tplHero.content, true);
            // assignation des valeurs importées du fetch aux balises html
            heroClon.querySelector(".name").innerText = hero.name;
            heroClon.querySelector(".alter-ego").innerText = hero.alterEgo;
            heroClon.querySelector(".powers").innerText = hero.abilities;
            // Attachement du hero à la cible html
            targ.appendChild(heroClon);
        })
    }

    document.getElementById("run").addEventListener("click", getHeroes);

})();