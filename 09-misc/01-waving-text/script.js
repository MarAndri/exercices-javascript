/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let message = document.getElementById('target').innerHTML;
    document.getElementById('target').innerHTML = "";
    let lettres = message.split("");
    let size = 15;
    let y = 0;
    lettres.forEach(function (char) {
        let span = document.createElement("span");
        span.innerHTML = char;
        span.style.fontSize = `${size}px`;
        switch (y) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                size += 5;
                y++;
                break;

            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:

                size -= 5;
                y++;
                break;
            case 18:
                y = 0;
                break;
        }
        document.getElementById('target').appendChild(span);
    })

})();