// string
let myName: string = 'Max';
//myName = 28;

// number
let myAge: number = 27;
//myAge = 'Max';

// boolean
let hasHobbies: boolean = true;
//hasHobbies = 1;

// Assign types
let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
//hobbies = 100;

// tuples
let address: [string, number] = ['Superstreet', 99];
//address = [100, 'Ciao'];

// enum
enum Color {
    Gray, // 0
    Green = 100,// 100
    Blue = 2  // 2
};
let myColor: Color = Color.Green;
console.log(myColor); // 100

// any
let carNew: any = 'BMW';
console.log(carNew);
carNew = { brand: 'BMW', series: 3 };
console.log(carNew);

// functions
function returnMyName(): string {
    return myName;
}

function sayHello(): void {
    console.log('Hello');
//    return myAge;
}

console.log(returnMyName());
sayHello();

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 4));

// function types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// Objects
let userData: { name: string, ageNew: number } = {
    name: "Max",
    ageNew: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };

// Complex Objects
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//complex = {};

// type Alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// EXERCISE: Try to be as explicit as possible and add Types to everything you can!
type BankAccount = { money: number, deposit: (value: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// Union Types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
//myRealRealAge = true;

// Check Types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

// Never Type
function neverReturns(): never {
    throw new Error('An error');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
//canThisBeAny = 12;

let anything;
anything = 12;

function controlMe(isTrue: boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
