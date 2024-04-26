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


