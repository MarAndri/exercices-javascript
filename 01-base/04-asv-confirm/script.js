/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    do {
        age = prompt("Quel est votre âge ?");
        sexe = prompt("indiquez votre sexe");
        ville = prompt("indiquez votre ville");
        conf = confirm("Merci de confirmer vos informations : " + age + " - " + sexe + " - " + ville);
    }
    while (conf == false);
})();