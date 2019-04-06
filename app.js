"use strict";
// string
var myName = 'Max';
//myName = 28;
// number
var myAge = 27;
//myAge = 'Max';
// boolean
var hasHobbies = true;
//hasHobbies = 1;
// Assign types
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
//hobbies = 100;
// tuples
var address = ['Superstreet', 99];
//address = [100, 'Ciao'];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor); // 100
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
function sayHello() {
    console.log('Hello');
    //    return myAge;
}
console.log(returnMyName());
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
// function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// Objects
var userData = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };
// Complex Objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// Union Types
var myRealRealAge = 27;
myRealRealAge = "27";
//myRealRealAge = true;
// Check Types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// Never Type
function neverReturns() {
    throw new Error('An error');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
//canThisBeAny = 12;
var anything;
anything = 12;
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
