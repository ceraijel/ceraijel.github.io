/**
 * 
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. 
 * We can assign and re-assign anything to a variable we cannot do this with constants.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 * 
 * 3. Let store data in containers/are pointed to, are reassignable, and are not hoisted to the top of the scope
 *      they limit the variable scope to a specific block of code, they cannot be referenced before declared.
 *          - keyword: let
 * 
 * 4. Constant values can never be changed. They are block scoped and not hoisted to the top of their block scope.
 *      They cannot be referenced before being declared. Consts cannot be left unassigned.
 *          - keyword: const
 *          - typically written in caps with underscores as spaces
 **/

// 1. declaration 
var myName;

//At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything
console.log(myName); // prints => undefined

// 2. initialization or assignment 
myName = 'john';
console.log(myName); // prints => john
// Re-assignment
myName = 'bob';
console.log(myName); // prints => bob
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//3. Let
function useLet(){
    let c = "Blocked Inside"; // inside function let can be accessed
    console.log(c); // ==> prints: Blocked Inside
}

useLet();
//console.log(c); outside of function ==> reference error: c is not defined 

//4. Const
const FATHERS_NAME = "Daniell";
FATHERS_NAME = "Jerome";
console.log(FATHERS_NAME); // ==> prints: Daniell

// Hoisting
function timeOfDay (hour){
    if(hour === 12){
        console.log(msg); // ==> error! const is not hoisted so console does
                                //not know what to print until const is declared
        const msg = "Noon";
        console.log(msg); // ==> prints: Noon
    }else{//if not 12
        console.log(msg2); // ==> error! let is not hoisted to the top of its scope
        let msg2 = "Don't know the time";
        console.log(msg2); // ==> prints: Don't know the time
    }
}

timeOfDay(12); // ==> prints: Noon
