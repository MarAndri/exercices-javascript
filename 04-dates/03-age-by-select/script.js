/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {

        let today = new Date;
        let cuyear = today.getFullYear();
        let cumonth = today.getMonth();
        let cuday = today.getDate();

        let yearob = document.getElementById("dob-year").value;
        let monthob = (document.getElementById("dob-month").value) - 1;
        let dayob = document.getElementById("dob-day").value;

        let age;

        if (cumonth - monthob > 0) {
            age = cuyear - yearob;
        } else if (cumonth - monthob < 0) {
            age = (cuyear - yearob) - 1;
        } else if (cumonth - monthob == 0 && cuday - dayob >= 0) {
            age = (cuyear - yearob);
        } else {
            age = (cuyear - yearob) - 1;
        }
        alert(age);
    });
})();