// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Use the reduce method in combination with the concat method to “flatten” an array of arrays 
//into a single array that has all the elements of the original arrays.

function flatten(array) {
  //reduce loops the array. reduce produces a value, can store value in variable or return 
  //function directly to parent (flatten) function
 return array.reduce(function(acc, currentArr){
    //put all the arrays into one array with .concat (cannot + arrays together)
    //return concated array to anonymous function in reduce
     return acc.concat(currentArr); 
     
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Write a higher-order function loop that provides something like a for loop statement.
//It takes a value, a test function, an update function, and a body function. 
//Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
//Then it calls the body function, giving it the current value.
//Finally, it calls the update function to create a new value and starts from the beginning.

function loop(start, test, update, body) {
  //wants to "loop" value to test each function
  //make value the start of the loop. add start as a param
  //while looping, run rest function on value - pass passing values to
  //update value function 
  for(let value = start; test(value); value = update(value)){
    //after done looping and runningfunction on all passing values
    //run body funct on remaining values
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Implement every as a function that takes an array and a predicate function as parameters.

function every(array, funct) {
  //loop array with for of to access elements in array
  for(let element of array){
    //if elements in array are false inside conditional
    if(!funct(element)){
      return false;
    }
  }
  //else return true to parent function
   return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  let arr = countBy(str, function(char){
    //get the unicode value for the current character
    let unicode = char.charCodeAt();
    //find the script obj from the unicode character
    let script = characterScript(unicode);
    //returning the name of the script direction or null
    if(script !== null){
      return script.direction;
    }else{
      return script;
    }
  });
  //find the highest count by sorting
  arr.sort(function(a, b){
    return b.count - a.count;
  })
  return arr[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
