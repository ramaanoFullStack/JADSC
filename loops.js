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

// Nesting For loops

// Challenge

/*
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line

    // Only change code above this line
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// Solution

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    // Only change code above this line
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// Iterate with JavaScript Do..While Loops

//Challenge

/*
Change the while loop in the code to a do...while loop so the loop will push
only the number 10 to myArray, and i will be equal to 11 when your code has
finished running.
*/

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
    myArray.push(i);
    i++;
}

// Solution

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 5);
