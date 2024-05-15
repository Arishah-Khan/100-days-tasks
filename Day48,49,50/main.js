"use strict";
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
const helloWorldPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
helloWorldPromise.then((message) => console.log(message));
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0;
    if (success) {
        resolve("Promise resolved successfully!");
    }
    else {
        reject("Promise rejected!");
    }
});
myPromise
    .then((message) => {
    console.log("Resolved:", message);
})
    .catch((error) => {
    console.error("Rejected:", error);
});
// Question 144: Explain the use of the Promise.all() method with an example.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function callback(callback, num1, num2) {
    callback(num1, num2);
}
const add = (a, b) => {
    console.log(a + b);
};
callback(add, 7, 4);
// Question 146: Show an example of a callback function used to filter an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumbers = numbers.filter((number) => number > 4);
console.log(filterNumbers);
// Question 147: Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
setTimeout(() => {
    console.log("This message is shown after a 2-second delay.");
}, 2000);
// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(() => {
    console.log("Callback executed");
}, 0);
console.log("End");
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
console.log("Before synchronous Operation ");
for (let i = 0; i < 1e9; i++) { }
console.log("After synchronous operation");
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
