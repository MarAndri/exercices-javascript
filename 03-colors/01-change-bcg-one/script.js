/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const changeColor = bgcolor => {
        switch (bgcolor) {
            case 'red':
                document.body.style.backgroundColor = bgcolor;
                break;
            case 'green':
                document.body.style.backgroundColor = bgcolor;
                break;
            case 'yellow':
                document.body.style.backgroundColor = bgcolor;
                break;
            case 'blue':
                document.body.style.backgroundColor = bgcolor;
                break;
        }
    }
    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (changeColor($btn.id), false),
        ),
    )
})();