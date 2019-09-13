/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        let tabnums = [];

        for (let i = 1; i <= 10; i++) {
            nums = Math.floor(Math.random() * 100);
            document.getElementById("n-" + i).innerHTML = nums;
            tabnums.push(nums);
        }
        document.getElementById("min").innerHTML = Math.min(...tabnums); // Attention, tu avais oublié les 3 petits points avant "tabnums"
        document.getElementById("max").innerHTML = Math.max(...tabnums);
        document.getElementById("sum").innerHTML = tabnums.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = tabnums.reduce((a, b) => a + b, 0) / tabnums.length;

    });

})();