"use strict";
;
function newGreet(person) {
    console.log('Hello, ' + person.name);
}
function changeName(person) {
    person.name = 'Anna';
}
var myPerson = {
    age: 35,
    name: "Simone",
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log("Hi, I'm " + this.name + " " + lastName);
    }
};
//newGreet({age: 35, name: "Simone"});
changeName(myPerson);
newGreet(myPerson);
myPerson.greet('Taeggi');
var PersonInt = /** @class */ (function () {
    function PersonInt() {
        this.name = 'Max';
        this.lastName = 'Scwarz';
    }
    PersonInt.prototype.greet = function (lastName) {
        console.log("Hi, I'm " + this.name + " " + lastName);
    };
    ;
    return PersonInt;
}());
var myPersonNew = new PersonInt();
myPersonNew.name = 'Simone';
myPersonNew.lastName = 'Taeggi';
newGreet(myPersonNew);
myPersonNew.greet(myPersonNew.lastName);
var myDoubleFunc;
myDoubleFunc = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(myDoubleFunc(10, 20));
;
var oldPerson = {
    age: 44,
    name: 'Chuck',
    greet: function (lastName) {
        console.log('Hello');
    }
};
console.log(oldPerson);
