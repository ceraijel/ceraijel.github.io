/**
 * 
 * FUNCTIONS:
 * 
 * 0. Functions are a block of code that we can execute whenever and however many times we want. They are created 
 *          using the keyword, parameters and passing arguments. Parameters are optional variables that are used
 *          to hold the place of a value that will later be passed into the function. The values passed into the function 
 *          are arguments. Functions are considered local/function scoped meaning they can see & alter variables outside of the function but
 *          data inside functions cannot be accessed or altered outside of the function scope.
 * 
 * 1. Two (2) phases of using a function
 *          a. declaration/definition - creating the function
 *              - keyword: function
 *              - parameters in parenthesis (optional)
 *              - block of code to run inside curly braces
 *          b. calling/executing the code - using the function/passing arguments
 *              - name function followed by parenthesis filled with as many values as parameters 
 * 
 * 2. Functions can be assigned to variables, these are called Function Expressions
 * 
 * 3. Function Closures reference and have access to variables in their parent scope.
 * 
 * 4. Local/Function Scope: variables declared inside a function are considered function scoped, they cannot be accessed in 
 *    the global scope (the code outside of curly braces)
 * 
 **/
 
 
 //1. Create a named function
 /*declare*/ function /*name*/myFunction (param1, param2){
     //code to run when we call function
     console.log(param1 + param2);
 }
 // call function, pass arguments seperated by comma
 myFunction("We created", " a function"); // ==> prints: We created a function
 
 //2. Function Expression
 let divide = function(num1, num2){
     return num1 / num2;
 };
 
let dividend = divide(10, 2);
console.log(dividend); // ==> prints: 5

//3. Function Closure
//"parent" function
function myFunc() {
    //variable inside "parent" function scope
  var name = "C'era";
  //"child" function (inside "parent" function)
  function coderName() {
      //inside body of "child" function scope, use parent scope variable
    console.log(name);
  }
  //return "child" function inside "parent" function
  return coderName;
}

//store "parent" function inside variable because parent function is returning a value
var theFunc = myFunc();
//call function using variable it's stored inside. Prints: C'era
theFunc(); 

//4. Local/Function Scope
function local(){
    let scope = "I am local";
    console.log(scope); // ==> prints: "I am local"
}// <--- close the scope of this function

//console.log(scope); ==> this console.log cannot "see" the variable because it is inside the functions scope (curly braces)

local();// ==> invoke function to run console.log inside function scope
