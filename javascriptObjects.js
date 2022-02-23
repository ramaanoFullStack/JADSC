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

// Accessing Object Properties with Bracket Notation

//Challenge

/*
    Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to
    entreeValue and drinkValue respectively.
*/

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line

//Solution

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

// Accessing Object Properties with Variables

//Challenge

/*
Set the playerNumber variable to 16. Then, use the variable to
look up the player's name and assign it to player.
*/

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line

//Solution

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

//Updating Object Properties

//Challenge

/*
Update the myDog object's name property. Let's change her name from Coder to Happy Coder.
You can use either dot or bracket notation.
*/

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line

//Solution

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
myDog.name = "Happy Coder";

// Add New Properties to a Javascript Object

//Challenge

/*
Add a bark property to myDog and set it to a dog sound, such as "woof".
You may use either dot or bracket notation.
*/

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

//Solution

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "woof";

// Delete Properties from a JavaScript Object

//Challenge

/*
Delete the tails property from myDog. You may use either dot or bracket notation.
*/

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

//Solution

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

//Using Objects for Lookups

// Challenge

/*
Convert the switch statement into an object called lookup. Use it to look up val and assign the associated
string to the result variable.
*/

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

//Solution

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

//Testing Objects for Properties

//Challenge

/*
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp).
If the property is found, return that property's value. If not, return "Not Found".
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
        return "Change Me!"
    // Only change code above this line
}

//Solution

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    } else if(obj.hasOwnProperty(checkProp)!==true){
        return "Not Found"
    } else {
        return "Change Me!"
    }
    // Only change code above this line
}

// Manipulating Complex Objects

//Challenge

/*
Add a new album to the myMusic array.
Add artist and title strings, release_year number, and a formats array of strings.
*/

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

//Solution

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Tim Tam",
        "title": "Cho Cho",
        "release_year": 2022,
        "formats": [
            "MP3",
            "ALAC",
            "DSD"
        ]
    }
];

// Accessing Nested Objects

//Challenge

/*
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable.
Use dot notation for all properties where possible, otherwise use bracket notation.
*/

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = undefined;

//Solution

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
