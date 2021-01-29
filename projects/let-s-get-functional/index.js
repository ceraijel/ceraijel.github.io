// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./ceraijel.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use filter function, takes an array and callback function
    //is looping & running conditional
    let maleNumbers = _.filter(array, function(customerObj){
        return customerObj.gender === "male";
    });
    return maleNumbers.length;
};


var femaleCount = function(array) {
    //use reduce function, takes an array and callback function
    //is looping & running conditional
    //reduce takes an array, function, accum/sum(total), currentValue being evaluted & optional (index and array)?
    let femaleNumbers = _.reduce(array, function(total, currentVal){
            //add the accum and current value when array index has "female"??
            if(currentVal.gender === "female"){
                //add 1 to total
             total++;
        }
         //seed starts at 0 and add 1 each time we find "female"
         //have to return to stop loop
        return total;
    }, 0);
    //return value of femaleNumbers after running code(reduce) on it
    return femaleNumbers;
};

var oldestCustomer = function(array){
   let oldestAge = 0;
   let oldestName = '';
   //for each loops through array. customer param reps every element in array of objs
   array.forEach(function(customer){
       //if customer age prop is greater than oldest age (starting at 0) make age prop oldest age
       if(customer.age > oldestAge){
            //will compare and replace old age with larger number as it iterates through array
           oldestAge = customer.age;
           //oldest name will equal customer name prop
           oldestName = customer.name;
       }
   });//return oldest name outside of loop but inside function
     return oldestName;
};

var youngestCustomer = function(array){
   let youngAge = 120;
   let youngName = '';
   //for each loops through array. customer param reps every element in array of objs
   array.forEach(function(customer){
       //if customer age prop is less than young age (starting at 100) make age prop young age
       if(customer.age < youngAge){
            //will compare and replace young age with smaller number as it iterates through array
           youngAge = customer.age;
           //young name will equal customer name prop
           youngName = customer.name;
       }
   });//return young name outside of loop but inside function
     return youngName;
};

var averageBalance = function(array){
    //use reduce to reduce down to a single sum
    let balance = ._reduce(array, function(total, ))
}

// var averageBalance = function(array){
//     let arrLength = 0;
//     let balanceArr = []
//     //filter to get balance from objs, balances are strings
//     let balanceObjs = _.filter(array, function(balanceStr){
//         return balanceStr.balance; //--> should return array of objs with balance 
//     })
//      //get array length number (store in variable) to divide sum by to find average
//      arrLength = balanceObjs.length; //now we should be able to get balance and divide by this variable
//   //put obj balances into an array using map? 
//   _.map(function (balanceObjs){
//       return balanceObjs.balance; //an array of balances ["$3,868.37", "$3,690.70", "$1,005.44", ....etc]
//       //on each index, remove special characters
//   }).forEach(function(arrInd){
//       balanceArr = arrInd.replace(/[^\w\s]/gi, ''); // removes all special characters
//   })
//     //add all  balance numbers in array (reduce down to a sum??) 
    
    
//     //use for each to divide number returned from reduce by the number of balances in array
// }

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
