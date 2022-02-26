// Use Destructuring Assignment to Extract Values from Objects

/*
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
*/

// Challenge

/*
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line

//Solution

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

// Use Destructuring Assignment to Assign Variables from Objects

// Challenge

/*
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line

// Solution

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

// Use Destructuring Assignment to Assign Variables from Nested Objects

// Challenge

/*
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables lowToday and highToday the values of today.
low and today.high from the LOCAL_FORECAST object.
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line

// Solution

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const {today:{ low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line

// Use Destructuring Assignment to Assign Variables from Arrays

// Challenge

/*
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
*/

let a = 8, b = 6;
// Only change code below this line

// Solution

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// Challenge

/*
Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr
is a sub-array of the original array source with the first two elements omitted.
*/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Only change code below this line
    const arr = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)

// Solution

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// Challenge

/*
Use destructuring assignment within the argument to the function half to send only max and min inside the function.
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0;
// Only change code above this line

// Solution

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line
