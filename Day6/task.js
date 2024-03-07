"use strict";
// Day 6
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Kiran", "Ajwa", "Tasmiya", "Zimal", "Samahir", "Laiba"];
let canNotAttend = guestList.pop();
let newGuest = guestList.splice(4, 4, "Ayesha");
console.log("Exciting News! As a bigger dinner table is open.");
let guestBeginning = "Mariyam";
guestList.unshift(guestBeginning);
// console.log(guestList);
let newGuestMiddle = "Areeba";
let middleGuest = guestList.length / 2;
guestList.splice(middleGuest, 0, newGuestMiddle);
// console.log(guestList);
guestList.push("Bisma");
// console.log(guestList);
guestList.map((items) => console.log(`\"Dear ${items}!, you are invited for dinner this weekend.\"`));
