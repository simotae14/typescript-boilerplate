"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Max').length);
console.log(echo(27).length);
console.log(echo({ name: 'Max', age: 34 }).length);
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: 34 }));
// Built-in Generics
var testResultsNew = [1.94, 2.33];
testResultsNew.push(-2.99);
//testResultsNew.push('string');
console.log(testResultsNew);
// Generics with array
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// Generics Types
var echo2;
echo2 = echo;
console.log(echo2("Something"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
