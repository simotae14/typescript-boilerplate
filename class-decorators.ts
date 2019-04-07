// class decorator
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class PersonSecond {
    constructor() {
        console.log('Hi!');
    }
}

// Factory
function logging(value: boolean): any {
    return value ? logged : null;
}

@logging(false)
class CarNew {

}

// Advanced Decorator
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class PlantGreen {
    name = "Green Plant";
}

const plantNew = new PlantGreen();
(<any>plantNew).print();

// Method Decorator
function editable(value: boolean): any {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    };
}

class ProjectDec {
    projectName: string;
    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new ProjectDec("Super project");
project.calcBudget(); // 1000
// overwrite the method
// project.calcBudget = function() {
//     console.log(2000);
// }
project.calcBudget(); // 2000

// Properties Decorator
function overwritable(value: boolean): any {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}

class ProjectPropDec {
    @overwritable(false)
    projectName: string;
    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

// const projectDec = new ProjectPropDec("Super project");
// projectDec.calcBudget(); // 1000
// overwrite the method
// projectDec.calcBudget = function() {
//     console.log(2000);
// }
//projectDec.calcBudget(); // 2000
// console.log(projectDec);

// Parameter Decorator
function printInfos(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfos printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
