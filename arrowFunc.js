// Use Arrow Functions to Write Concise Anonymous Functions

// Challenge

/*
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax.
Also, make sure nothing is defined using the keyword var.
*/

var magic = function() {
    return new Date();
};

// Solution

const magic = () => new Date();
// Test
console.log(magic());

// Write Arrow Functions with Parameters

// Challenge

/*
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
*/

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

// Solution

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions

// Challenge

/*
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
*/

// Only change code below this line
const increment = (number, value) => number + value;

// Only change code above this line

// Solution

const increment = (number, value = 1) => number + value;

// Use the **Rest Parameter with Function Parameters

// Challenge

/*
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
*/

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

// Solution

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(5))

// Use the **Spread Operator to Evaluate Arrays In-Place

// Challenge

/*
Copy all contents of arr1 into another array arr2 using the spread operator.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);

// Solution

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
