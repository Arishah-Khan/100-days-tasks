// Question 133: Write a JavaScript object and convert it into a JSON string.

const student1 = {
    name : "Maheen",
    rollNo  : 17,
    age : 16
};

const jsonString1 = JSON.stringify(student1);

console.log(jsonString1);

// Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonString2 = `{
    "name" : "Iqra",
    "rollNo"  : 21,
    "age": 20
}`;

const student2 = JSON.parse(jsonString2);

console.log(student2);

// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const person = {
    name : "Maryam",
    city : "Karachi",
    age : 20
};

const jsonString3 = JSON.stringify(person, null, 2);

console.log(jsonString3);

// Question 136: Use console.log() to debug and track the value of a variable inside a loop.

for (let i = 0; i < 10; i++) {
    console.log(`Iteration ${i}, i value:, i`);
}

// Question 137: Implement a try-catch block to handle potential errors in a block of code.
try {

    throw new Error("Something went wrong");

  } catch (error){

    console.log(error.message); 
  };

//   Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

console.log("Before Breakpoint");

console.log(
    "This line has a breakpoint set on it in the browser's developer tools"
  );

  console.log("After Breakpoint");

//   Question 139: List three reserved words in JavaScript and create a valid use case for each.


let num:number = 2;

console.log(typeof num);

function sum (num1:number , num2:number) {
    return num1 + num2
};

sum(2,6);

// reserved words 'let', 'typeof', and 'return'.

// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.

// let let:number = 9;   // It cause a syntax error


console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");


// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.


function fetchSomething() : string{
    return "Simulated data"
}


async function fetchData() {

    const data = await fetchSomething();
    console.log(data);
  
  }
  
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );










