/*
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:
*/
class MyMap<T> {
    // define the internal map
    private map: {[key: string]: T } = {};
    setItem(key: string, item: T) {
        this.map[key] = item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        Object.keys(this.map).forEach((key) => {
            const value = this.map[key];
            console.log(`${key} : ${value}`);
        });
    }
}

//setItem(key: string, item: T) // should create a new key-value pair

//getItem(key: string) // should retrieve the value of the provided key
//clear() // should remove all key-value pairs
//printMap() // should output key-value pairs
// The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();