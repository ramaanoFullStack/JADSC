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
