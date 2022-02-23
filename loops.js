//Iterate with Javascript While loops

//Challenge

/*
Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
*/

// Setup
const myArray = [];

// Only change code below this line

//Solution

// Setup
const myArray = [];

// Only change code below this line
let i = 5

while (i > -1) {
    myArray.push(i);
    i--;
}

// Iterate with Javascript For loops

// Challenge

/*
Use a for loop to push the values 1 through 5 onto myArray.
*/

// Setup
const myArray = [];

// Only change code below this line

//Solution

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++){
    myArray.push(i);
}

// Iterate Odd Numbers With a For Loop

// Challenge

/*
Push the odd numbers from 1 through 9 to myArray using a for loop.
*/

// Setup
const myArray = [];

// Only change code below this line

// Solution

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 11; i += 2){
    myArray.push(i);
}

// Count Backwards with a For Loop

//Challenge

/*
Push the odd numbers from 9 through 1 to myArray using a for loop.
*/

// Setup
const myArray = [];

// Only change code below this line

// Solution

// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2){
    myArray.push(i);
}

// Iterate Through an Array with a For Loop

// Challenge

/*
Declare and initialize a variable total to 0.
Use a for loop to add the value of each element of the myArr array to total.
*/

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

// Solution

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i = 0; i < myArr.length; i++){
    total += myArr[i];
}
