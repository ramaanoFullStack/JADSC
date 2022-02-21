// Returning  Boolean Values

//Challenge

function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
        return true;
    } else {
        return false;
    }
    // Only change code above this line
}

isLess(10, 15);

//Solution

function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);


//Returning Early Pattern for Function

//Challenge

// Setup
function abTest(a, b) {
    // Only change code below this line


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//Solution

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a, b < 0){
        return undefined;
    }
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2,-2));
