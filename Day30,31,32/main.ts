// Question 88: Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.


function stringToNumber(strToNum:string):number{
  return Number(strToNum);
}

console.log(stringToNumber("123")); 

// Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.

function roundNumber(num:number):number {
  return  Number(num.toFixed(2));
};

console.log(roundNumber(3.14159));

// Question 90: Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.

function geaneratingRoundNumber():number{

    return Math.floor(Math.random() * 10) + 1;
}

console.log(geaneratingRoundNumber());

// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

let fruits:string[] = ["apple", "banana", "orange"];

fruits.push("pineapple");

console.log(fruits);

// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement(arr:string[]):string | undefined{
    return arr.pop()
}
console.log(removeLastElement(fruits));

console.log(fruits);

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceFruit(fruits:string[]):void{
    let index = fruits.indexOf("apple");
    fruits[index] = "mango";
}

replaceFruit(fruits);

console.log(fruits);

// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.


let words:string[] = ["Lion", "Elephant", "Tiger", "Giraffe"];

let wordLength:number[] = words.map(word => word.length);

console.log(wordLength);


// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function filterNumbers(number:number[]):number[]{

    return number.filter(num => num > 10);
}

console.log(filterNumbers([4,8,12,16,20,24,28,32,36,40]));

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function sumNumbers(number:number[]):number{
    return number.reduce((total, num) => total + num);
}

console.log(sumNumbers([4,8,12,16]));

