// Generate Random Fractions with Javascript

// Challenge

/*
Change randomFraction to return a random number instead of returning 0.
*/

function randomFraction() {

    // Only change code below this line

    // Only change code above this line
}

// Solution
function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}

// Generate Random Whole Numbers with JavaScript

/*
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

1.Use Math.random() to generate a random decimal.
2.Multiply that random decimal by 20.
3.Use another function, Math.floor() to round the number down to its nearest whole number.

Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's
impossible to actually get 20. This technique will give us a whole number between 0 and 19.
*/

// Challenge

/*
Use this technique to generate and return a random whole number between 0 and 9.
*/

function randomWholeNum() {

    // Only change code below this line

    return Math.random();
}

// Solution

function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// Generate Random Whole Numbers within a Range

// Challenge

/*
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's
greater than or equal to myMin, and is less than or equal to myMax, inclusive.
*/

function randomRange(myMin, myMax) {
    // Only change code below this line
    return 0;
    // Only change code above this line
}

// Solution

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}
let myRandom = randomRange(5, 15);

console.log(myRandom);
