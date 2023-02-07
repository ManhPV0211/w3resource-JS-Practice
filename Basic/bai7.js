/*
7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
*/

function getYearSpecial() {
    let result = [];
    for(let year = 2014; year <= 2050; year++) {
        let myDate = new Date(`January 1, ${year}`);
        myDate.getDay() === 6 && result.push(year);
    };

    return result;
};

console.log(getYearSpecial());