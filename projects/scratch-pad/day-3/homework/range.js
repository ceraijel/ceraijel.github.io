// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(num1, num2) {
   //i - 2 numbers
   //o - an {array} 
   //c - if first less than second, return range in order
   //   if first is greater than second, return in reverse
   //e - 
   //create array for numbers we return
   var array = [];
   //if first is less than second, print in order
   if(num1 < num2){
       //start: num1 - stop:when num1 is equal to num2 - update: count up to num2 
       for(var i = num1; i <= num2; i++){
           //push each number into an array
           array.push(i);
       }
   }else{//there are only 2 conditions, if/else statement 
       //start: num1 - stop: when num1 equals num2 - update: count down to num2
       for(var i = num1; i >= num2; i--){
           //push each number into an array
           array.push(i);
       }
       
   }// <------ end of condtional (closes else block of code)
   //return array we've been pushing into OUTSIDE of the conditional statement
   return array;
     // YOUR CODE GOES ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
