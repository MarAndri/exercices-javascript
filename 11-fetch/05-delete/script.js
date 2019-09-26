/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function deleteHero(data) {
        const hId = document.getElementById("hero-id").value;
        const response = await fetch(`http://localhost:3000/heroes/${hId}`, {
            method: 'DELETE'
        });
        const respdata = await response.json();
        console.log(respdata);
    };

    document.getElementById("run").addEventListener("click", () => {
        deleteHero();
    })
})();