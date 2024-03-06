"use strict";
// Day 4
// Question no 10
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
// Dated: 20-02-24
// storing the number of ingredients in a recipe:
let ingredients = 12;
// Creating a message about the recipe:
let recipe = `"The recipe requires ${ingredients} ingredients."`;
// Printing the message:
console.log(recipe);
// Question no 11
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Names:
let myName = ["Ayesha", "Nimra", "Maheen", "Aizal", "Meerab", "Kinza"];
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);
console.log(myName[5]);
// Question no 12
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
let names = ["Ayesha", "Nimra", "Maheen", "Aizal", "Meerab", "Kinza"];
let message0 = "Hope your day is as awesome as you are!";
console.log(`\"Hello ${names[0]}! ${message0}\"`);
let message1 = "How's it going?";
console.log(`\"Hey ${names[1]}! ${message1}\"`);
let message2 = "Let's catch up soon,";
console.log(`\"Greetings, ${names[2]}! ${message2}\"`);
let message3 = "Wishing you a fantastic day ahead.";
console.log(`Hey, ${names[3]}! ${message3}`);
let message4 = "It's always great to see your smiling face.";
console.log(`\"Hi ${names[4]}! ${message4}\"`);
let message5 = "How are you doing today,";
console.log(message5 + " " + names[5] + "?");
//Day 5
// Question no 13
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Honda Civic", "BMW", "Suzuki Alto", "Toyota Carolla"];
transportation.map((items) => console.log(`\"I would like to own a ${items}.\"`));
// Question no 14
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_List = ["Kiran", "Ajwa", "Tasmiya", "Zimal", "Laiba"];
guest_List.map((items) => console.log(`\"Dear ${items}, you are invited for dinner this weekend.\"`));
// Question no 15
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let guestList = ["Kiran", "Ajwa", "Tasmiya", "Zimal", "Samahir", "Laiba"];
let canNotAttend = guestList.shift();
console.log(`Sorry, ${canNotAttend}! can't make it, for Dinner.`);
let newGuest = guestList.splice(0, 0, "Ayesha");
guestList.map((items) => console.log(`\"Dear ${items}!, you are invited for dinner this weekend.\"`));
// OR  
// let guests:string[] = ["Nimal","Hammad","Yasir","Shifa","Maheen"];
// let cantInvited:string = "Yasir";
// console.log("Sorry " + cantInvited + " " + "can't make it for dinner.");
// let newinvited:string = "Amna";
// guests[guests.indexOf(cantInvited)] = newinvited;
// guests.map((items) => (console.log(`\"Dear ${items}, you are invited for dinner this weekends.\"`)))
