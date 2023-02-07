/*
Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

function rotateString(input) {
    if(typeof(input) == "string") {
        const copyInputToArr = input.split("")
        let newArr = [];
        for(let element of copyInputToArr) {
            newArr.unshift(element);
        };
        return newArr.join("");
    };
};

console.log(rotateString("w3resource"));


