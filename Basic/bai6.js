/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
*/

function determineLeapYear(yearNumber) {
    if(yearNumber % 100 === 0) {
        if(yearNumber % 4 === 0) return `${yearNumber} la nam Nhuan.`
        else return `${yearNumber} khong la nam Nhuan.`
    } else if (yearNumber % 4 === 0) return `${yearNumber} la nam Nhuan.`
    else return `${yearNumber} khong la nam Nhuan.`
};

console.log(determineLeapYear(2001));