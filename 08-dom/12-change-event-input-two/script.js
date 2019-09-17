/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let input = document.querySelector("#pass-one");
    input.addEventListener("input", () => {
        console.log("test");
        let number = new RegExp('[0-9].*[0-9]');
        if (input.value.length >= 8 && input.value.match(number)) {
            document.querySelector("#validity").innerHTML = "Ok";
        }
    })
})();