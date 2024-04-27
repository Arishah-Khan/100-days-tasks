// Question no 67

// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.


let addNumberAndString = (num1: number, stringNumber: string): number => {

    return num1 + Number(stringNumber);

}

console.log(addNumberAndString(5, "8"));


// Question no 68

// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


let multiplyDecimals = (num1: number, num2: number): number => {

    let product: number = num1 * num2;

    let roundedProduct: number = Math.round(product * 100) / 100;

    return roundedProduct;

}

console.log(multiplyDecimals(3.5, 4.66));


// Question no 69

// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

let divideAndFindRemainder = (num1: number, num2: number): object => {

    let quotient: number = Math.floor(num1 / num2);

    let remainder: number = num1 % num2;

    return {
        quotient,
        remainder
    }

}

console.log(divideAndFindRemainder(11, 4));


// Question no 70

// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

let printNumbers = () => {

    for (let i = 1; i <= 5; i++) {

        console.log(i);

    }
// Question no 71

// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let myName: string = "Arishah";

myName = "Laiba";

console.log(myName);

const luckyNmuber: number = 12;

try {
    // luckyNmuber = 13;  // There is an error in this line

}catch (error){
    console.log("Error: You can't reassign a const-declared variable");
}

// Question no 72

// // Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

{
    let letBlock: string = "visible inside the block";

    const constBlock: string = "also visible inside the block";

    console.log(letBlock);

    console.log(constBlock);

}
try {
    console.log(letBlock); // There is an error in this line
}catch(error){

    console.log("Error: letBlock is not accessible outside of the block");
}
try {

    // console.log(constBlock); // There is an error in this line
}catch(error){

    console.log("Error: constBlock is not accessible outside of the block");
};
}

printNumbers();




