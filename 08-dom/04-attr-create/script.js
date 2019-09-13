/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // selectionner le selecteur de la valeur à récupérer
    let liensource = document.querySelector("#source")
    // récupérer la valeur de l'attribut
    let lien = liensource.getAttribute("data-image");
    console.log(lien);
    // créer la balise image
    let newel = document.createElement("img");
    // ajouter la balise dans le sélecteur comprenant l'id "target"
    document.querySelector("#target").appendChild(newel);
    // créaton d'un attribut source
    let newatt = document.createAttribute("src");
    // assignation de la valeur (donc le lien) à l'attribut
    newatt.value = lien;
    // assignation de l'attribut à la balise image
    newel.setAttributeNode(newatt);

    // fonction pour effacer la balise source
    function remove() {
        // sélection de la balise
        var el = document.getElementById(source);
        // recherche de la balise parent et effacement de l'enfant
        document.querySelector(".material").removeChild(liensource);
    }
    // Action!
    remove();
})();