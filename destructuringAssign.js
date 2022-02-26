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

