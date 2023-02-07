/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function getCurrentDate() {
    const today = new Date();
    const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const mm = today.getMonth() < 10 ? `0${today.getMonth()+1}`: today.getMonth()+1;
    const yyyy = today.getFullYear();

    console.log(`${dd}-${mm}-${yyyy}`);
};

getCurrentDate();