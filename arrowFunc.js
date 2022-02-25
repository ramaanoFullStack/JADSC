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
