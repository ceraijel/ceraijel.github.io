/**
 * 
 * DATA TYPES:
 * 
 * 0. How we categorize different types of data in javascript. To be able to operate on variables, you need to know the different types of data (or values). 
 * 
 * 1. Simple/Primitive data types: include numbers, strings, booleans, NaN, undefined, null, & infinity. They do not hold, collect, or aggregate other values.
 *     They have limited space of 8 bytes. 
 * 
 * 2. Simple data types are immutable/atomic and copied by value: Operations on these types return new simple data types, they do not alter the original value. 
 *                                                      
 * 3. Do not confuse simple data types with varaibles assigned* to a simple data type. Variables can be reassigned a new value but the existing value cannot be
 *     altered in the same ways that objects, arrays, & functions can be altered. Simple data types can can be replaced, not altered.
 * 
 * 4. Complex data types: include objects, arrays, and functions. They can aggregate & hold other values which mean they can be indefinite in size.
 *          - Object: Collection of key/value pairs (properties) inside curly braces
 *          - Array: Collection of values in an zero indexed list inside square brackets 
 *          - Functions: Reusable blocks of code that we pass data to. Can take as many or as little parameters as needed and runs code inside curly braces
 * 
 * 
 * 5. Complex data types are copied by reference: Altering a reference value to to a complex type will alter the orginal value
 *  
 **/
 
 
//1.
//Number: 
var number = 3;  //(the largest of the simple data types, takes the whole 8bytes)
//String:
var string = "values/characters in quotes";
//Boolean: 
var boolean; //(true or false)
//NaN
NaN; //Not a Number //(typeof NaN => "number")
//Undefined
undefined;//no value; indicates a variable has been decalred or varaible has not been assigned a value
//Null
null; //no value, intentional abscense of value by programmer
//Infinity
// a variable in the global scope. It's initial value is positive and can be inversed (negative)

//2. Copy by value
var carType = "Hyundai";
var carSpecs = carType + ": 75,000 miles";
console.log(carType); // ===> Hyundai
console.log(carSpecs); // ==> Hyundai: 75,000 miles

//3. Data assigned to variable
var primitive = "I am simple"; // ===> "I am simple" is pointing to/stored inside the variable 'primitive'. Only the string is a simple data type.

//4. Coplex Data Types
//Object 
var myObject = {
 nameFirst: "C'era",
 nameLast: "Washington"
};
//Array
var myArray = [1, "Cat", true, null];
//Function
function myFunct (param1){
 //code what function should do here
};



//5. Copy by reference
var myObject = {
 nameFirst: "C'era",
 nameLast: "Washington"
};

var objectTwo = myObject;

objectTwo.age = 27;

console.log(myObject.age); // ===> 27: Original object (myObject) was altered after altering objectTwo that was referencing original object


