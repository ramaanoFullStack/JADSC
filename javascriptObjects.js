// Building JavaScript Objects

//Challenge

/*
    Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
    You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers,
    and friends is an array.
*/

const myDog = {
    // Only change code below this line

    // Only change code above this line
};

//Solution

const myDog = {
    // Only change code below this line
    "name": "Tamtam",
    "legs": 4,
    "tails": 1,
    "friends": ["FriendOne","FriendTwo"]

    // Only change code above this line
};

//Accessing Objects Properties with Dot Notation

//Challenge

/*
    Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property
    hat and set the variable shirtValue equal to the object's property shirt.
*/

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line

//Solution

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
