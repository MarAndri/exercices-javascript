/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* (() => {
    var gateau = prompt("Voulez-vous du gâteau?"); {
        if (gateau == "oui") {
            alert("Bravo!");
        } else {
            alert(">_< ... Du gâteau, ça ne se refuse pas !");
        }
    }
})(); */

(() => {
    var gat = prompt("Voulez-vous du gâteau?");
    alert(gat == "oui" ? "Bravo!" : ">_< ... Du gâteau, ça ne se refuse pas !");
})();