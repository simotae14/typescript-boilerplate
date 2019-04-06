interface NamePerson {
    name: string,
    age?: number,
    [propName: string]: any,
    greet(lastName: string): void
};

function newGreet(person: NamePerson) {
    console.log('Hello, ' + person.name);
}
function changeName(person: NamePerson) {
    person.name = 'Anna';
}

const myPerson: NamePerson = {
    age: 35,
    name: "Simone",
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
        console.log("Hi, I'm " + this.name + " " + lastName);
    }
};
//newGreet({age: 35, name: "Simone"});
changeName(myPerson);
newGreet(myPerson);
myPerson.greet('Taeggi');

class PersonInt implements NamePerson {
    name: string = 'Max';
    lastName: string = 'Scwarz';
    greet(lastName: string) {
        console.log("Hi, I'm " + this.name + " " + lastName);
    };
}

const myPersonNew = new PersonInt();
myPersonNew.name = 'Simone';
myPersonNew.lastName = 'Taeggi';
newGreet(myPersonNew);
myPersonNew.greet(myPersonNew.lastName);

// function interface
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleValueFunc;
myDoubleFunc = function(num1: number, num2: number) {
    return (num1 + num2) * 2;
};

console.log(myDoubleFunc(10, 20));

// Interface Inheritance
interface AgedPerson extends NamePerson {
    age: number;
};

const oldPerson: AgedPerson = {
    age: 44,
    name: 'Chuck',
    greet(lastName: string) {
        console.log('Hello');
    }
}

console.log(oldPerson);
