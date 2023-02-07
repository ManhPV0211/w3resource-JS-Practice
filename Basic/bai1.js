/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
function displayCurrentDay() {
    const refDay = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    const today = new Date();
    return `Today is: ${refDay[today.getDay()]}. Current time is: ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}
    `
};

console.log(displayCurrentDay());