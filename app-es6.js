"use strict";
// let & const
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;
// Block Scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greetFirst = function () {
    console.log('Hello');
};
greetFirst();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Manu');
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown(20);
// REST & SPREAD
console.log("REST & SPREAD");
var number = [1, 10, 99, -5];
console.log(Math.max(33, 9, 99, -8));
console.log(Math.max.apply(Math, number));
// REST
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 6)); // [1, 2, 6]
// DESTRUCTURING
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData2 = { username: 'Max', ageMy: 27 };
var myNameSimo = userData2.username, myAgeSimo = userData2.ageMy;
console.log(myName, myAgeSimo);
