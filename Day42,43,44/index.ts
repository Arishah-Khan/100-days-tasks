// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

let ownName = {

    name : "Arishah",

    getName : function() {
        return this.name;
    } 
};

console.log(ownName.getName());

// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

let triangle = {
    base : 6,
    height : 8,
    calculate : function() {
        return this.base * this.height / 2;
    }
}

console.log(triangle.calculate());

// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

let object  = {
    property :  "value",
    outerObject : function() {
        console.log(this.property);

        let innerObject = () => {
            console.log(this.property);
        }
        innerObject();
    }
};

object.outerObject();

// Question 127: Convert a traditional function expression to an arrow function.

let traditionalFunction = function(x, y) {
    return x * y;
}
let arrowFunction = (x, y) => {
    return x * y;
};

console.log(traditionalFunction(2, 3));

console.log(arrowFunction(2, 3));

// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters

let multipleParameters = (...numbers : number[]) =>

numbers.reduce((total,number) => 
total*number , 1)


console.log(multipleParameters(3,4,5));

// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

let traditionalVsArrow = {

    property : "value",

    traditionalFunction : function() {
        console.log("Traditional Function:" , this.property);
    },
    // arrowFunction : () => {
    //     console.log("Arrow Function:" , this.property);
    // }  // The error occurs in the arrow function because this.property refers to a property in global context, potentially resulting in undefined behavior.
   
};

traditionalVsArrow.traditionalFunction();

// traditionalVsArrow.arrowFunction();


// Question 130: Explain how to export a function from one JavaScript file and import it into another file


import { sum } from "./mathModule";

console.log(sum(2, 3));

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { student } from "./student";

let arishah = new student("Arishah");

console.log(arishah.greet());

// Question 132: Discuss the difference between default and named exports in JavaScript modules.


import { numOne,numTwo } from "./number";

import calculation from "./calculation";


