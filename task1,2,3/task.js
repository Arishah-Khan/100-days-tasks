"use strict";
// Day 1
// Question No 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
let firstName = "Hammad Khan";
console.log(`\"Hello ${firstName}, would you like to learn some Python today\"?`);
// Question No 3
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Lowercase:
let my_name1 = "hAmmAd kHAn";
console.log(my_name1.toLowerCase());
//Uppercase:
let my_name2 = "hAmmAd kHAn";
console.log(my_name2.toUpperCase());
//Titlecase:
let my_name3 = "hAmmAd kHAn";
console.log(my_name3.charAt(0).toUpperCase() + my_name3.slice(1, 6).toLowerCase() + " " + my_name3.charAt(7).toUpperCase() + my_name3.slice(8, 11).toLowerCase());
// Day 2
// Question No 4
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Alexander Graham Bell once said, “Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.”");
// Question No 5
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Alexander Graham Bell";
let quote = "“Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.”";
console.log(`${famous_person} once said, ${quote}`);
// Question no 6
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let myName = "\t Hammad Khan \n";
console.log(`Namw with whitespace : ${myName}`);
// Day 3
// Question no 7
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
// 1. Addition:
let a = 8;
let b = 4;
console.log(a + b);
// 2. Subtraction:
console.log(a - b);
// 3. Multiplication:
console.log(a * b);
// 4. Division:
console.log(a / b);
// Question no 8
// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
// Addition: 
console.log(4 + 4);
// Subtraction:
console.log(12 - 4);
// Multiplication:
console.log(2 * 4);
// Division:
console.log(24 / 3);
// Question no 9
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let num1 = 60;
console.log(`I like the number ${num1}`);
