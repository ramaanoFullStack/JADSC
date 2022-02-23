// Compare Scopes of the var and let Keywords

/*
When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword
inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
*/

// Challenge

/*
Fix the code so that i declared in the if statement is a separate variable than i
declared in the first line of the function. Be certain not to use the var keyword
anywhere in your code. designed to illustrate the difference between how var and let
keywords assign scope to the declared variable. When programming a function similar to
the one used in this exercise, it is often better to use different variable names to avoid
confusion.designed to illustrate the difference between how var and let keywords assign
scope to the declared variable. When programming a function similar to the one used in
this exercise, it is often better to use different variable names to avoid confusion.
*/

function checkScope() {
    var i = 'function scope';
    if (true) {
        var i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// Solution

function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
