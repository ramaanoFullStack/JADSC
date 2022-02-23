// Use the parseInt Function

/*
The parseInt() function parses a string and returns an integer. Here's an example:
*/

// Challenge

/*
Use parseInt() in the convertToInteger function, so it converts the input string str into an integer, and returns it.
*/

function convertToInteger(str) {

}

// Solution

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("007"));


// Use the parseInt Function with a Radix

// Challenge

/*
Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
*/

function convertToInteger(str) {

}

convertToInteger("10011");

// Solution

function convertToInteger(str) {
    return (parseInt(str, 2))
}

convertToInteger("10011");
