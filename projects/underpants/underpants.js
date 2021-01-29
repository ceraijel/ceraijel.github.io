// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(Array.isArray(value)){
        return "array";
    }else if(value === null){
        return "null";
    }else if(typeof value === "object"){
        return "object";
    }else if(typeof value === "string"){
        return "string";
    }else if(typeof value === "number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(typeof value === "undefined"){
        return "undefined";
    }else if(typeof value === "function"){
        return "function";
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//input array and a number
_.first = function(array, num){
    //if array is not an array return array literal
        if(!Array.isArray(array) || num < 0){
            return [];
            //if number is not a number or not given (undefined), return first element in array
        }else if(isNaN(num) || num === undefined){
            return array[0];
        }else{
            //else return the first number of items in array (start: @ 0, stop: @ num param)
            return array.slice(0,  num);
        }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){
    //if array is not an array return array literal or num is negative
        if(!Array.isArray(array) || num < 0){
            return [];
            //else if number is not a number or not given (undefined), return last element in array
        }else if(isNaN(num) || num === undefined){
            return array[array.length -1];
        }else{
            //else return the last number items in array (start: @ the end of array - num (the "last index" is num param) stop: @ length of array (array.length)
            return array.slice(-num, array.length);
        }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //loop through array & return index (i) if that is first occurrance
    for(let i = 0; i <= array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
    //else return -1 if not in array
    return -1;
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //store boolean in variable
    //loop array
  for(let i = 0; i <= array.length; i++){
      //if array @ index has value && value is not undefined, return true: else return false
      if(array[i] === value && value !== undefined ? true: false){
          return true;
      }
  }
  //return false outside of loop
  return false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, funct){
    //if collection is array, call funct on each element (i). arguments: element, index, & collection
    if(Array.isArray(collection)){
        //loop array (if it is an array) & call function on each element - e, i, collection
        for(let i = 0; i < collection.length; i++){
            funct(collection[i], i, collection);
        }
    } else {
        //if collection is object, call funct on each prop with prop values, key, and collection
        //loop object & call function on each prop value, key, & collection
        for (var key in collection){
            funct(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    //return a new array of all elements from array with no duplicates
    //new array to push values into and return
     let newArr = [];
      //loop array(parent parameter) 
      for(let i = 0; i < array.length; i++){
         //indexof loops through an array & returns the first occurance of a value. takes an array and a value
         //indexof returns a value, either the first occurrence of a value in an array or -1 if value is not in array
         //store the return value of indexof inside variable 
         let value = _.indexOf(newArr, array[i]);
         //if function that indexOf runs returns -1(value is not in array) so we push the value thats not in it, into the array (newArr)
            if(value === -1){
                newArr.push(array[i]);
            } 
     }
   
   return newArr;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, funct){
    //create new array to return, push elements into & return 
    let finalArr = [];
    //each loops an array and calls a function on each element, index, & on the array
    //each takes an array & function
    _.each(array, function(element, index, array){
        //if we call funct & pass the element, index, & array & they are true, push element into array
        if(funct(element, index, array)){
            finalArr.push(element);
        }
    });
    //return the new array outside the loop and if statement
    return finalArr;
        
    };


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, funct){
    //return a new array
    let  newArr = [];
    //use each function to loop array and call funct on each element, index & array
    _.each(array, function(element, index, array){
        //if function call returns false, push elements into array
        if(funct(element, index, array) === false){
            newArr.push(element);
        }
    });
    return newArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, funct){
    //returning nested array
    //true array
    let trueArr = [];
    //false array
    let falseArr = [];
    //array that holds them both
    let subArr = [];
    //call funct on each element, key, & the array
    //can use each
    _.each(array, function(element, key, array){
        //if elements return true when funct called
        if(funct(element, key, array)){
            trueArr.push(element);
        }else{
            //if elements return false when funct is called
            falseArr.push(element);
        }
    });
    //add separate arrays inside subArr, surround in brackets to include them in subArr
    //return subArr outside of loop/if statement
    subArr = [[...trueArr],[...falseArr]];
    return subArr;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, funct){
    //return new array
    let newArr = [];
    //if <collection> is an array
    if(Array.isArray(collection)){
        //do something: loop array and call funct on each element, index, & array
        for(let i = 0; i < collection.length; i++){
             //push into elements into newArr
            newArr.push(funct(collection[i], i, collection));
        }
    }else{//else if collection is object
        //do something else: loop object and call funct on each prop value, key, & obj
            for(let key in collection){
                //push into elements into newArr
               newArr.push(funct(collection[key], key, collection));
            }
    }
    //return newArr outside of loops/if statements
    return newArr;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayOfObjs, prop){
    //map returns an array of ele, index, or collection (array or object) that pass function call
   return _.map(arrayOfObjs, function(element){
       //only want to return the elements property
        return element[prop];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, funct){
    //if funct returns true
    if(funct){
        //if collection is array
        if(Array.isArray(collection)){
            //loop array
            for(let i = 0; i < collection.length; i++){
                //if any element, index, or array is not true
                if(!funct(collection[i], i, collection)){
                    //return false
                    return false;
                }
            }
            //if funct is true, return true (line 436)
            return true;
        }else {
            //if collection is object
            for(let key in collection){
                //if any property, index, object is not true
                if(!funct(collection[key], key, collection)){
                    //return false
                    return false;
                }
            }
            //if object props with funct called are true, return true
            return true;
        }
    }else{
        //if collection is array
        if(Array.isArray(collection)){
            //loop array 
            for(let y = 0; y < collection.length; y++){
                //if there is no value at index
                if(!collection[y]){
                    //return false
                    return false;
                }
            }
            //else return true
            return true;
        }
    }
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, funct){
    let boolean = false;
    //use each to call function on each element, index, and collection
    _.each(collection, function(ele, ind, collection){
        //is funct is not given - go to line 515 
        if(typeof funct !== 'function'){
            //if one element is true
            if(ele){
                //return true
                boolean = true;
            }
        }//if funct can be called on each element, idex, & collection, return true
        else if(funct(ele, ind, collection)){
            boolean = true;
        }
        
    });
    //if no funct given, return false
    return boolean;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, funct, seed){
    //needs to do something if there is a seed
    //if person passes in seed,
    if(seed !== undefined){
        //we want to use the prev value as starting point
        let finalResult = seed;
        //loop through array startying at index 0 with each function
         _.each(array, function(element, index, array){
            //assign the result of passing each element to finalResult variable
            finalResult = funct(finalResult, element, index, array)
        })
        return finalResult;
        //if seed in undefined
    }else {
        //create new result variable and initialize it to the first input/index
        let finalResult = array[0];
        
        _.each(array, function(element, index, array){
            if(index !== 0){
                finalResult = funct(finalResult, element, index, array)
            }
        })
        return finalResult;
        
    }
    
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(...obj){
    return Object.assign(...obj);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
