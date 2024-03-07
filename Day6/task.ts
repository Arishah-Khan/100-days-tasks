// Day 6

//Question no 16

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guestList:string[] = ["Kiran","Ajwa","Tasmiya","Zimal","Samahir","Laiba"];

let canNotAttend = guestList.pop();

let newGuest = guestList.splice(4,4,"Ayesha");

console.log("Exciting News! As a bigger dinner table is open.");

let guestBeginning:string = "Mariyam";
guestList.unshift(guestBeginning);
// console.log(guestList);

let newGuestMiddle:string = "Areeba";
let middleGuest = guestList.length/2;
guestList.splice(middleGuest,0,newGuestMiddle);
// console.log(guestList);

guestList.push("Bisma");
// console.log(guestList);

guestList.map((items) => 
console.log(`\"Dear ${items}!, you are invited for dinner this weekend.\"`));


// Question no 17



// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

console.log("Regrettably,I have limited space for guests,and I can only invite two guests.");

let guestList1:string[] = ["Kiran","Ajwa","Tasmiya","Zimal","Samahir","Laiba"];

while(guestList1.length>2){
    let removedGuest = guestList1.pop() 
    console.log(`Sorry ${removedGuest}, you are not invited to the dinner`)
}

console.log(`\nDear ${guestList1[0]} and ${guestList1[1]}, You are still invited to the dinner.\n`);

console.log("Final List")
console.log(guestList1);

guestList1.splice(0,2);
console.log(guestList1);



// Question no 18

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let visitedPlaces: string[] = ["Lahore", "Islamabad", "Hunza Valley", "Muree", "Karachi"];
 console.log(visitedPlaces);

 let alphabeticalOrder =visitedPlaces.sort();
 console.log(alphabeticalOrder);

console.log(visitedPlaces);

let reversealphabetical = visitedPlaces.sort().reverse();
console.log(reversealphabetical);

console.log(visitedPlaces);

let placesreverse = visitedPlaces.reverse();
console.log(placesreverse);

let againreverse = placesreverse.reverse();
console.log(againreverse);

let sorted:string[] = ["Quetta","Skardu","Gilgit","Peshawar","Faisalabad"]
let sortedalphabets = sorted.sort();
console.log(sortedalphabets);

let sortedalphabetsreverse = sortedalphabets.reverse();
console.log(sortedalphabetsreverse);
