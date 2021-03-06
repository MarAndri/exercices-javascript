/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;
        if (pass1 != pass2) {
            let ajClass1 = document.createAttribute("class");
            ajClass1.value = "error";
            let ajClass2 = document.createAttribute("class");
            ajClass2.value = "error";
            document.getElementById("pass-one").setAttributeNode(ajClass1);
            document.getElementById("pass-two").setAttributeNode(ajClass2);
        }
    })
})();
//voir code Damien
// /!\ déclarer les valeurs en dehors du click, sans les "value"