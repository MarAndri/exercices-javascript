/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let datesearch = new Date(year);
        const monthname = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        for (month = 0; month < 12; month++) {
            for (date = 1; date <= 31; date++) {
                datesearch.setMonth(month, date);
                if (datesearch.getDay() == 5 && datesearch.getDate() == 13) {
                    alert(monthname[datesearch.getMonth()]);
                }
            }
        }
    });

})();