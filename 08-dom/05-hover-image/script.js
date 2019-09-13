/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // sélection de la balise image eta jout d'un évènement quand la souris la survole
    document.querySelector("img").addEventListener("mouseover", () => {
        // selectionner le selecteur de la valeur à récupérer
        let sourcehover = document.querySelector("img")
        console.log(sourcehover);
        // récupérer la valeur de l'attribut
        let lien = sourcehover.getAttribute("data-hover");
        console.log(lien);
        // assignation de la valeur à l'attribut
        sourcehover.src = lien;
    })
})();