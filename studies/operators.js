/**
 * 
 * OPERATORS:
 * 
 * 0. Process data and return new data. They act* on the data and are classified by how many operands they act on.
 *          - Unary: Work with one value - i++
 *          - Binary: Work with two (2) values - a + b 
 *          - Ternary: Work with three (3) values - a ? b : c 
 * 
 * 1. Assignment: Assigns a value of the right operand to the left operand
 * 
 * 2. Arithmetic: Used for mathimatical expressions
 * 
 * 3. Comparison: Compares two (2) operands and returns a boolean (true/false)
 * 
 * 4. Logical: Used to test for true or false
 * 
 * 5. Strict: Considers value AND type then returns boolean
 * 
 **/
 
 
//1. Assignment
var assignment = "assigned" // ==> "assigned" is assigned to variable assignment 
var assignNum = 25; // ==> 25 is assigned to assignNum
 
//2. Arithmetic
var add = 4 + 5; // ==> add the values 4 & 5 = 9
var subtract = 10 - 5; // ==> subtracts 5 from 10 = 5
var divide = 20 / 2;  // ==> divides 20 by 2 = 10
var multiply = 3 * 3; // ==> multiples 3 times 3 = 9
var modula = 10 % 3; // ==> gives the remainder of 10 divided by 3 = 1
 
//3. Comparison
//Greater than
console.log(1 > 5); // ==> prints: false
//Less than
console.log(1 < 2); // ==> prints: true
//Less than or equal to
console.log(1 <= 2); // ==> prints: true
//Greater than or equal to
console.log(1 >= 2); // ==> prints: false
 
//4. Logical
// AND operator 
console.log(10 > 2 && 200 > 199); // ==> both have to pass condition: prints True (false if given 2 false statements)
//OR operator
console.log(10 > 2 || 200 < 199); // ==> only one condition has to be met: prints True
//BANG operator 
console.log(10 !== 2); // ==> changes the truthiness of a value: prints True (10 is NOT equal to 2)

//5. Strict
console.log("2" === 2); // ==> prints: false 
console.log(5 === 5); // ==> prints: true
console.log(2 !== 2); // ==> prints: false

//Unary Operator
//The most common way to use a unary operator is when incrementing or decrementing a loop
for(let i = 0; i <= 10; i++){ // ==> i++ is adding 1 (one) each time we loop. 
    console.log(i); // prints each value: 0, 1, 2, 3, ...10
}

//Can add (count by) 2, 3, etc by i+=2, i+=3, & so on
for(let i = 0; i <= 10; i+=2){ // ==> i++ is adding 1 (one) each time we loop. 
    console.log(i); // prints each value starting at zero and adding 2: 0, 2, 4, 6, 8, 10
}

//Ternary opertors
//They resolve to a value, so store value inside of a variable and console.log to see if condition passes or fails
//3 parts: condition ?(question mark) what happens if true: what happens if false
let age = 25;
let canDrink = age >= 21 ? true : false;
console.log(canDrink); // ==> prints: true