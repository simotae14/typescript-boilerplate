// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;

// Block Scope
function reset() {
    let variable = null;
    console.log(variable);
}

reset();
console.log(variable);

// ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greetFirst = () => {
    console.log('Hello');
}

greetFirst();

const greetFriend = friend => console.log(friend);

greetFriend('Manu');

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};

countdown(20);

// REST & SPREAD
console.log("REST & SPREAD");
const number = [1, 10, 99, -5];
console.log(Math.max(33, 9, 99, -8));
console.log(Math.max(...number));

// REST
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 6)); // [1, 2, 6]

// DESTRUCTURING
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData2 = { username: 'Max', age: 27 };
const {
    username: myNameSimo,
    age: myAgeSimo
} = userData2;
console.log(myName, myAgeSimo);
