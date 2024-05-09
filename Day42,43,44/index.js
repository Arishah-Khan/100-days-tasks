"use strict";
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
Object.defineProperty(exports, "__esModule", { value: true });
var ownName = {
    name: "Arishah",
    getName: function () {
        return this.name;
    }
};
console.log(ownName.getName());
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var triangle = {
    base: 6,
    height: 8,
    calculate: function () {
        return this.base * this.height / 2;
    }
};
console.log(triangle.calculate());
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var object = {
    property: "value",
    outerObject: function () {
        var _this = this;
        console.log(this.property);
        var innerObject = function () {
            console.log(_this.property);
        };
        innerObject();
    }
};
object.outerObject();
// Question 127: Convert a traditional function expression to an arrow function.
var traditionalFunction = function (x, y) {
    return x * y;
};
var arrowFunction = function (x, y) {
    return x * y;
};
console.log(traditionalFunction(2, 3));
console.log(arrowFunction(2, 3));
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters
var multipleParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) {
        return total * number;
    }, 1);
};
console.log(multipleParameters(3, 4, 5));
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var traditionalVsArrow = {
    property: "value",
    traditionalFunction: function () {
        console.log("Traditional Function:", this.property);
    },
    // arrowFunction : () => {
    //     console.log("Arrow Function:" , this.property);
    // }  // The error occurs in the arrow function because this.property refers to a property in global context, potentially resulting in undefined behavior.
};
traditionalVsArrow.traditionalFunction();
// traditionalVsArrow.arrowFunction();
// Question 130: Explain how to export a function from one JavaScript file and import it into another file
var mathModule_1 = require("./mathModule");
console.log((0, mathModule_1.sum)(2, 3));
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
var student_1 = require("./student");
var arishah = new student_1.student("Arishah");
console.log(arishah.greet());
