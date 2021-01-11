// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //use a for loop to access number 1 - 100
for(var i = 1; i <= 100; i++){
    //use if statement to check
    //check if i is a multiple of BOTH first. if not, it will not reach that code after finding the true statements of 3 and 5 separately 
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        //if multiple of 3 print fizz
    }else if(i % 3 === 0){
        console.log("Fizz");
        //if multiple of 5 print buzz
    }else if(i % 5 === 0){
        console.log("Buzz");
        //if neither, print the number
    }else{
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}