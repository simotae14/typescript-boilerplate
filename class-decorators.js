"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// class decorator
function logged(constructorFn) {
    console.log(constructorFn);
}
var PersonSecond = /** @class */ (function () {
    function PersonSecond() {
        console.log('Hi!');
    }
    PersonSecond = __decorate([
        logged
    ], PersonSecond);
    return PersonSecond;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var CarNew = /** @class */ (function () {
    function CarNew() {
    }
    CarNew = __decorate([
        logging(false)
    ], CarNew);
    return CarNew;
}());
// Advanced Decorator
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var PlantGreen = /** @class */ (function () {
    function PlantGreen() {
        this.name = "Green Plant";
    }
    PlantGreen = __decorate([
        logging(true),
        printable
    ], PlantGreen);
    return PlantGreen;
}());
var plantNew = new PlantGreen();
plantNew.print();
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var ProjectDec = /** @class */ (function () {
    function ProjectDec(name) {
        this.projectName = name;
    }
    ProjectDec.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false)
    ], ProjectDec.prototype, "calcBudget", null);
    return ProjectDec;
}());
var project = new ProjectDec("Super project");
project.calcBudget(); // 1000
// overwrite the method
// project.calcBudget = function() {
//     console.log(2000);
// }
project.calcBudget(); // 2000
// Properties Decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var ProjectPropDec = /** @class */ (function () {
    function ProjectPropDec(name) {
        this.projectName = name;
    }
    ProjectPropDec.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], ProjectPropDec.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], ProjectPropDec.prototype, "calcBudget", null);
    return ProjectPropDec;
}());
// const projectDec = new ProjectPropDec("Super project");
// projectDec.calcBudget(); // 1000
// overwrite the method
// projectDec.calcBudget = function() {
//     console.log(2000);
// }
//projectDec.calcBudget(); // 2000
// console.log(projectDec);
// Parameter Decorator
function printInfos(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfos)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
