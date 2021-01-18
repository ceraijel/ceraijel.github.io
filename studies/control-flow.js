/**
 * 
 * CONTROL FLOW/CONDITIONAL STATEMENTS:
 * 
 * 0. Allows us to control the direction of our code based on whether conditions are true or false. Refers to the order that code is executed. 
 *      The inside of the parentheses is considered Boolean context, meaning it will force any expression inside to be a Boolean
 *      
 * 
 * 1. If Statement - to create a conditional statement you start with keyword: if
 *                                  followed by parenthesis with your condition inside
 *                                  followed by curly braces with what code you want to run based on condition.
 *  
 * 2. If/Else-if/Else Statement - Else-if statements continue a conditional chain. They have to have a condition
 *                                  only the first true condition in a chain is executed
 *                              - Else statements end condtional chains, if nothing in chain resolves to true this code is executed.
 * 
 * 3. Switch Statements - evaluates an expression and matches the value to a case (like a condition) and runs a code (execute statment(s)) 
 *                          associated with that case.
 * 
 **/ 
 
 //1. Create a conditional statement
 if(/*condition*/ true){
     /*run some code*/
     console.log("this is true");
 }
 
 //2. If/Else-if/Else chain
if(1 > 3){
    console.log("False");
}else if(2 > 20){
    console.log("False");
}else{
    console.log("None were true");
}
 
//3. Switch Statement
let expression = 'Townhouse';
switch (expression) {
  case 'Studio':
    console.log('Studio has 1 room');
    break;
  case 'House':
  case 'Townhouse':
    console.log('House and Townhouse have 4 bedrooms');// ==> prints: "House and Townhouse have 4 bedrooms"
    break;
  default:
    console.log("Sorry, we are out of the " +  expression + " options.");
}
 
 