// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

let car : any = {

    make: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car.model);


// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.


car.color = "Black";

car.year = 2021;

console.log(car);



// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.


function logProperties(obj: any) {

    for (let property in obj) {

        console.log(`${property} : ${obj[property]}`);

    }

};
logProperties({
    name: "Laiba",
    age: 18,
    city: "Karachi",
    nationality:"Pakistani"

});

// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.


function stringLength(str: string) {

    return str.length;

};

console.log(stringLength("Laiba"));


// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.


function convertCase(str: string) {

    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

};


convertCase("hAmmAd KhaN");


// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".


function replaceText(str: string) {

    console.log(str.replace(/JavaScript/g, "TypeScript"));

};

replaceText("JavaScript is a popular programming language. Many developers love JavaScript.");


// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.


function findPosition(str: string) {

    console.log(str.indexOf("code"));

};

findPosition("This is a sample code.");


// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.


function checkText(str: string):boolean {

    let result =  str.includes("JavaScript")


    return result;

};

console.log(checkText("TypeScript is a superset of JavaScript."));


// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.


function extractSubstring(str: string) :string {

    return str.substring(0, 10)

};

console.log(extractSubstring("This is a sample string to demonstrate substring extraction."));





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

