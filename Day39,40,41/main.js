"use strict";
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function DaysOfWeek(NumberOfDays) {
    switch (NumberOfDays) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
    }
}
;
// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function Seasons(month) {
    switch (month) {
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        default:
    }
}
;
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function DefaultCase(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Very Good");
            break;
        case "C":
            console.log("Good");
            break;
        case "D":
            console.log("Fair");
            break;
        case "E":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
        default:
            console.log("Invalid Grade");
            break;
    }
}
;
// Question 118: Write a loop that logs numbers from 1 to 10 to the console.
for (let i = 1; i <= 0; i++) {
    console.log(i);
}
;
// Question 119: Create a while loop that logs "Hello, World!" 5 times.
let i = 0;
while (i < 5) {
    console.log("Hello, World!");
    i++;
}
;
// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
let favouriteMovie = ["Zero Dark Thirty", "A Beautiful Mind", "The Impossible", "The Secret Life of Walter Mitty"];
for (let movies of favouriteMovie) {
    console.log(movies);
}
;
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
;
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;
while (count >= 1) {
    if (count === 5) {
        break;
    }
    console.log(count);
    count--;
}
;
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function logVowels(str) {
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}
;
logVowels("syzgyg");
