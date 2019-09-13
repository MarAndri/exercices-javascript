/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let tableau = "<table>";
    for (var a = 1; a <= 10; a++) {
        tableau += "<tr>";
        for (var b = 1; b <= 10; b++) {
            tableau += ("<td>" + a + "x" + b + "=" + a * b + "</td>");
        }
        tableau += "</tr>";
    }
    tableau += "</table>";
    document.getElementById("target").innerHTML = tableau;
})();