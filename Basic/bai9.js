/*
9. Write a JavaScript program to calculate days left until next Christmas.
*/
// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]
function caculateDayUntilChristmas() {
    const currentDay = new Date();
    const nextChristmasDay = new Date(`December 25, ${currentDay.getFullYear()}`);

    return Math.ceil((nextChristmasDay.getTime() - currentDay.getTime())/(60*60*24*1000))
};

console.log(caculateDayUntilChristmas());