"use strict";
/*
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:
*/
var MyMap = /** @class */ (function () {
    function MyMap() {
        // define the internal map
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        var _this = this;
        Object.keys(this.map).forEach(function (key) {
            var value = _this.map[key];
            console.log(key + " : " + value);
        });
    };
    return MyMap;
}());
//setItem(key: string, item: T) // should create a new key-value pair
//getItem(key: string) // should retrieve the value of the provided key
//clear() // should remove all key-value pairs
//printMap() // should output key-value pairs
// The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
