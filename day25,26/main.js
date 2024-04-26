// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function updateVariable() {
    var initialNumber = 20;
    console.log("Initial Number: ", initialNumber);
    initialNumber = 25;
    console.log("Updated Number: ", initialNumber);
}
updateVariable();
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapValues() {
    var a = 5, b = 10;
    console.log("before swap: " + "a: " + a + " b: " + b);
    var change = a;
    a = b;
    b = change;
    console.log("after swap: " + "a: " + a + " b: " + b);
}
;
swapValues();
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
var compoundAssignmet = function () {
    var x = 4;
    console.log("initial value " + x);
    x += 3;
    console.log("after addition " + x);
    x -= 3;
    console.log("after subtraction " + x);
    x *= 4;
    console.log("after multiplication " + x);
    x /= 2;
    console.log("after division " + x);
};
compoundAssignmet();
// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
var sum = function (num1, num2) {
    return num1 + num2;
};
var result = sum(4, 9);
console.log(result);
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greet(user) {
    if (user === void 0) { user = "anonymous"; }
    console.log("Hello " + user + "!");
}
greet("Bob");
greet();
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
var functionExpression = function (num) {
    return num * num;
};
var functionDeclaration = function (num) {
    return num * num;
};
console.log(functionExpression(5));
console.log(functionDeclaration(5));
