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
    //filter is looping & running conditional, has to return something that will be boolean
    let maleNumbers = _.filter(array, function(customerObj){
        //return value that passed condition for anonymous function passed into filter function
        return customerObj.gender === "male";
    });
    //return value to parent function
    return maleNumbers.length;
};


var femaleCount = function(array) {
    //reduce takes an array, function, accum/sum(total), currentValue being evaluted & optional (index and array)?
    let femaleNumbers = _.reduce(array, function(total, currentVal){
            //if currentVal gender key is female
            if(currentVal.gender === "female"){
                //add 1 to total, total = 0 bc i set seed
             total++;
        }
         //seed starts at 0 and adds 1 each time we find "female"
         //have to return a value to anonymous function passed into reduce
        return total;
        //set seed to 0
    }, 0);
    //return value of femaleNumbers variable that is holding the total accumulaator
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
   });//return oldest name outside of loop but inside parent function
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
    //use map
    let balanceArr = _.map(array, function(customerObj){
        //access the value 
        //on each object value inside array i want to take the dollar sign
        let noDollar = customerObj.balance.replace(/([$,])+/, ""); 
        //on each element now i want to take the comma away
        let cleanNum = noDollar.replace(/([$,])+/, ""); // ---> each string ["3868.37", "3690.70", "1005.44", ....etc]
    //then convert to number. parseInt doesnt work for numbers with decimicals ..parseFloat works with them
        return parseFloat(cleanNum); //---> [3868.37, 3690.70, 1005.44, ....etc]
    });
    //reduce add all the numbers
    return balanceArr.reduce(function(total, currentBal){
        //
        return total = total + currentBal;
        //divide sum of numbers (total) in array by the number of elements in array (array length) to get average
    }, 0)/ array.length;
};

//i - array and letter(char)
//o - a number
//Objective: Find how many customer’s names begin with a given letter
var firstLetterCount = function(array, letter){
    //loop the array and get object value from name key
    //use filter if true filter will automatically add it to return array
    //param (customer obj) reps entire objects in array
    //get current length of array once conditions are met
    return _.filter(array, function(customerObj){
    //if name key starts with [0], letter 
      return customerObj.name[0].toUpperCase() === letter.toUpperCase();
      //filter returns an array of elements that met conditions, get length
      //length is number of things that passed
    }).length;
}

//Objective: Find how many friends of a given customer have names that start with a given letter
//Input: Array, Customer, Letter
//Output: Number
var friendFirstLetterCount = function(array, customer, letter){
    //loop and find the object name is equal to customer 
    for(let i = 0; i < array.length; i++){
        //if array i (element thats an object) name is equal to customer param we're checking
        if(array[i].name === customer){
    //filter friends array - an array of objects. each element in array is parameter (friendObj)
         return _.filter(array[i].friends, function(friendObj){
    //if friend name key starts with [0], letter. will return array with elements that pass condition
      return friendObj.name[0].toUpperCase() === letter.toUpperCase();
    //.length of array is how many ppl pass the condition
     }).length;
    }
    
   }
}

//Objective: Find the customers’ names that have a given customer’s name in their friends list
//Input: Array, Name
//Output: Array
var friendsCount = function(array, name){
    //loop customers <array> and return friends array of Objs
    //finalArr is accumulator, each object in customers array is repped by customers
   return _.reduce(array, function(finalArr, customer){ //customer is an array of objs
        //loop friends array in customer obj 
        for(let i = 0; i < customer.friends.length; i++){
            //check if friend name matches given name (param)
            //loop friends array, if friends name matches given name parameter
            if(customer.friends[i].name === name){
                //add customer name to finalArr
                finalArr.push(customer.name)
                //return final array after changes made bc i made changes
                return finalArr;  
            }
        }
        //my anonymous function inside reduce has to return accum ALWAYS
        return finalArr;
    }, [])
}

//Objective: Find the three most common tags among all customers’ associated tags
//Input: Array
//Output: Array

var topThreeTags = function(array){
    //loop array and find tags key (array of strings)
    //reduce is looping customers array
   let wordCnt = _.reduce(array, function(words, customerObj){
          //loop tags array if word at index is not in words (obj) add it to obj
          for(let i = 0; i < customerObj.tags.length; i++){
              if(words[customerObj.tags[i]] === undefined){
                  words[customerObj.tags[i]] = 1;
              }else{
            //if words are in tags array, count each word
                  words[customerObj.tags[i]]++
              }                                                 //from line 166 - 191 i am transforming the data stored inside wordCnt variable
          }
          return words;
    }, {})
    //put all keys in an array then map over them
    let wordCntArr = Object.keys(wordCnt).map(function(key){
        return {count: wordCnt[key], word: key};
        
    //sort array count values
    }).sort(function(a, b){
        //sory object key value of count in descending order
        return b.count - a.count;
    //put 3 highest counts into array by slices at index 3
    //slice returns full object of top 3 word objs
    //map the array of Objs, param reps every every obj in array  
    }).slice(0, 3).map(function(wordVal){
        //return word value inside object in array
        return wordVal.word;
    })
    //return array 
    return wordCntArr;
    
}


//Objective: Create a summary of genders, the output should be
//Input: Array
//Output: Object
//Constraints: Use reduce
//{
//    male: 3,
//    female: 4,
//    non-binary: 1
//}

var genderCount = function(array){
    //loop customers array (reduce does this)
    return _.reduce(array, function(finalObj, customerObj){
        //if gender value is not in finalObj (empty obj), add 1
        if(finalObj[customerObj.gender] === undefined){
            finalObj[customerObj.gender] = 1;
        }else{
        //else if it is, +1
            finalObj[customerObj.gender]++
        }
        return finalObj;
    }, {})
    
}

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
