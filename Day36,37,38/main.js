"use strict";
// Question 106: Determine if a given year is a leap year using comparison operators.
function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log(leapYear(2020));
console.log(leapYear(1997));
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function divisible(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log(divisible(6));
console.log(divisible(15));
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function compare(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log(compare("Hello", "hello"));
console.log(compare("Hello", "Helo"));
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
function greeting(time) {
    if (time < 12) {
        console.log("Good Morning");
    }
    else {
        console.log("Good Afternoon");
    }
}
;
greeting(11);
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function grade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
;
console.log(grade(95));
console.log(grade(55));
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function ageGroup(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age <= 20) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
;
console.log(ageGroup(12));
console.log(ageGroup(17));
console.log(ageGroup(30));
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
let countries = new Map();
countries.set("Germany", "Berlin");
countries.set("Pakistan", " Islamabad");
countries.set("Canada", "Ottawa");
console.log(countries);
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function capital(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map");
    }
}
;
capital(countries);
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
let students = new Map();
students.set(1, "Manahil");
students.set(2, "Kinza");
students.set(3, "Maryam");
for (let [key, value] of students) {
    console.log(` student ID: ${key}, Name: ${value}`);
}
