// Mutate an Array Declared with const

/*
The const declaration has many use cases in modern JavaScript.
Some developers prefer to assign all their variables using const
by default, unless they know they will need to reassign the value.
Only in that case, they use let.
*/

// Challenge

/*
An array is declared as const s = [5, 7, 2].
Change the array to [2, 5, 7] using various
element assignments.
*/

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
}
editInPlace();

// Solution

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // Using s = [2, 5, 7] would be invalid
    return s;
    // Only change code above this line
}
console.log(editInPlace());
