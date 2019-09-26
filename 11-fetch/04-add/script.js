/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const hName = document.getElementById("hero-name");
        const hAltE = document.getElementById("hero-alter-ego");
        const hPow = document.getElementById("hero-powers");
        const hPowArr = hPow.value.split(',');
        if (hName.value != '' && hAltE.value != '' && hPow.value != '') {
            insertHero({
                name: hName.value,
                alterEgo: hAltE.value,
                abilities: hPowArr
            });
        } else console.log('missing input data');
    })
    async function insertHero(data) {
        const response = await fetch('http://localhost:3000/heroes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respdata = await response.json();
        console.log(respdata);
    };
})();