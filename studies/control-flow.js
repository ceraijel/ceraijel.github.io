/**
 * 
 * CONTROL FLOW/CONDITIONAL STATEMENTS:
 * 
 * 0. Allows us to control the direction of our code based on whether conditions are true or false. Refers to the order that code is executed. 
 *      The inside of the parentheses is considered Boolean context, meaning it will force any expression inside to resolve to a Boolean
 *      
 * 
 * 1. If Statement - to create a conditional statement you start with keyword: if
 *                                  followed by parenthesis with your condition inside
 *                                  followed by curly braces with what code you want to run based on condition.
 *  
 * 2. If/Else-if/Else Statement - Else-if statements continue a conditional chain. They have to have a condition
 *                                only the first true condition in a chain is executed
 *                              - Else statements end condtional chains, if nothing in chain resolves to true this code is executed.
 *  A. Can have more than one else if statement attached, meaning you can check if an expression passes or fails multiple conditions
 *  B. What happens if there are two if statements that are true?
 * 
 * 3. Switch Statements - evaluates an expression and matches the value to a case (like a condition) and runs a code (execute statment(s)) 
 *                        associated with that case.
 * 
 **/ 
 
 //1. Create a conditional statement
 if(/*condition*/ true){
     /*run some code*/
     console.log("this is true"); // ==> prints: "this is true"
 }
 
 //2. If/Else-if/Else chain
if(1 > 3){
    console.log("False");
}else if(2 > 20){
    console.log("False");
}else{
    console.log("None were true"); // ==> prints: "None were true"
}
 
 //2A.
//You can have more than one else if statement. This allows you to check an expression against multiple conidtions like checking the time of day.
function greeter(hour) {
    if(hour === 0 || hour <= 11){
        console.log('Good Morning!');
    }else if(hour === 12 || hour <= 16){
        console.log('Good Afternoon!');
    }else if(hour === 17 || hour <= 21){
        console.log('Good Evening!');
    }else if(hour === 22 || hour < 24){
        console.log('Good Night!');
    }
}
greeter(20);// ==> prints: "Good Evening!"
 
//2B.
//What happens with two true if statements and both are true
let age = 27;
if(age === 27){
    console.log("this is the first true"); // ==> prints: "this is the first true"
} // ---> you can create a second if statement as long as you are not in the code block of first if statement
if(age < 29){
    console.log("this is true two"); // ==> prints separately: "this is true two" bc it is after the block of code {} of the first statment
}

//You can use the AND && or OR || operators for less space
// && - both conditions need to be truw
// || - only one condition has to be true
let age2 = 27;
if(age2 === 27 && age2 < 29){
    console.log("these are both true statements");
}else{
    console.log(false);
}
// ==> prints: "these are both true statments"
 
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
 
//Only first true statement is executed
let age3 = 27;
if(age3 === 27){
    console.log("this is the first true");
}else if(age3 < 29){ // ==> even though this statment is true, the code will not run because conditonal statements stop at the first true statement
    console.log("this is true two") ;
}else{
    console.log(false);
}