"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function currentDate() {
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, "0");
    let month = String(currentDate.getMonth() + 1).padStart(2, "0");
    let year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
}
;
console.log(currentDate());
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysLeft() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    let timeLeft = newYear.getTime() - today.getTime();
    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
}
;
console.log(daysLeft());
// Question 99: Generate a date object representing your next birthday and log it to the console.
function getNextBirthday(month, day) {
    let today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
;
let nextBirthday = getNextBirthday(10, 6);
console.log("Next Birthday On: ", nextBirthday.toLocaleDateString());
// Question 100: Use the JavaScript Math object to find the square root of 144.
let squareRoot = Math.sqrt(144);
console.log(`Square root of 144 is ${squareRoot}.`);
// Question 101: Generate a random integer between 1 and 10.
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
// Question 102: Calculate and log the absolute difference between the number -5 and 5.
let difference = Math.abs(-5 - 5);
console.log(difference);
// Question 103: Write a function that returns a random boolean value, true or false.
function randomBoolean() {
    return Math.random() >= 0.5;
}
;
console.log(randomBoolean());
// Question 104: Create a function that generates a random hexadecimal color code.   
function randomHexColor() {
    return "#" + Math.floor(Math.random() * 0xff0044).toString(16).padStart(6, "0");
}
;
console.log(randomHexColor());
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
;
console.log(rollDice());
