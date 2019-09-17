/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let input = document.querySelector("#pass-one");
    input.setAttribute("maxlength", 10);
    input.addEventListener("input", () => {
        let inputlen = input.value.length;
        if (inputlen <= 10) {
            document.querySelector("#counter").innerHTML = inputlen + "/10";
        }
    })

})();