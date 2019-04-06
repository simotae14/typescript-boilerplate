class PersonEx {
    name: string;
    private type: string = "cool";
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }
    // method
    printAge() {
        console.log(this.age);
        this.setType("Old guy")
    }

    // set type
    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const personNew = new PersonEx('Max', 'max');
console.log(personNew.name, personNew.username);
personNew.printAge();
//personNew.setType('Cool guy');


// Inheritance
class Simone extends PersonEx {
    name = "Simone";

    constructor(username: string) {
        super("Simone", username);
        this.age = 31;
    }
}
const simone = new Simone("simone");
console.log(simone);

// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ABCD";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    // abstract method
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = 'Something else';