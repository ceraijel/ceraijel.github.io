////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a range function that takes two arguments, start and end, 
//and returns an array containing all the numbers from start up to (and including) end.

function range(start, end, step) {
  
  //array to hold all values after looping
  let arr = [];
  //if start and end are same
  if(start === end){
    return [];
  }
  //if step is undefined, make it 1 to work with original range function (i++)
  if(step === undefined){
    step = 1;
  }
  
  //if start is less than end, then step needs to be positive
    if(start < end && step > 0){
    //loop numbers start to end and count up
      for(let i = start; i <= end; i += step){
    //push elements [i] into array
        arr.push(i)
      }
    }
    //if start is greater than end, then step needs to be negative to be able to count down
    if(start > end && step < 0){
      //loop numbers and count down (step is negative here so will count down with whatever num passed to step)
    for(let i = start; i >= end; i += step){
      //push elements into array
      arr.push(i);
    }
  }
  //return new array to function
  return arr;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //make sum variable to hold the value of each number
  let sum = 0;
  //loop array and add each index(number) to sum variable
   for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  //return sum 
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //set empty array in variable to push and return new array
  var newArr = [];
  //loop array from back to front 
  for(let i = array.length - 1; i >= 0; i--){
    newArr.push(array[i])
  }
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //loop until in the middle of array (length divided by 2)
  for(let i = 0; i < (array.length - 1) / 2; i++){
    //store value(element) at each index inside a variable
    let element = array[i];
    //make first index (as we're looping) the last index inside the loop so it does that for each element
    array[i] = array[array.length - 1 - i];
    //make last index equal first
    array[array.length - 1 - i] = element;
  }
  //return the array to the function
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function arrayToList that builds up a list structure like the one shown 
//when given [1, 2, 3] as argument. 

function arrayToList(array) {
  //make list null bc when we reach the end of the array we want the value for index 3 to be null
  let list = null;
  //start at end of array (index 3) to assign null to the prop of 3
  for(let i = array.length -1; i >= 0; i--){
    //reassign list to new obj
    //value keys value will be the index in the array we are on in the loop
    //rest keys will be obj that list is reassigned to on each iteration
    list = {value: array[i], rest: list};
  }
  //return list object after loop is done
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//listToArray function that produces an array from a list.

function listToArray(list) {
  //create an array to push values intp
  let array = [];
  //loop list obj to access list values
  //loop start at the beginning of obj
  //while obj is still an object
  //while looping reassign i to hold value of rest prop
  for(let i = list; i; i = i.rest){
    //value at rest is list
    //access value of value prop in list object and push values into array
    array.push(i.value);
  }
  //return array of values
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//prepend, which takes an element and a list and creates a new list 
//that adds the element to the front of the input list

function prepend(value, list) {
  //return an obj with element (value) in front of list
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//nth, which takes a list and a number and returns the element at the given position in the list 
//(with zero referring to the first element) or undefined when there is no such element.

function nth(list, num) {
  //num is the index
  //base case - where i want to go
  //if there is no list
  if(!list){
    return undefined;
  }
  //base case - if num = 0 (when we reach index 0)
  if(num === 0){
    //return value in list at index 0
    return list.value;
  }else{
    //recursive case - 1 step to reach my base cases
    //call function, subtract 1 from num to move through each index
    return nth(list.rest, num - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //compare 2 values (assumed to be objects) - if same - return true
  if(x === y){
    return true;
  }
  
  //if x is null (null returns obj) or x is not a typeof object - not an obj - return false
  if(x === null || typeof x !== "object"){
    return false;
  }
    //if y is null (null returns obj) or y is not a typeof object - not an obj - return false
  if(y === null || typeof y !== "object"){
    return false;
  }
  
  //put each objects keys into arrays
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  
  //if the length of the keys arrays are not equal - they are not the same - return false
  if(xKeys.length !== yKeys.length){
    return false;
  }
  //loop array of x keys
  for(let key of xKeys){
    //if y array of keys does not include the same keys as x of keys array (repped by keys) 
    if(!yKeys.includes(key) || !deepEqual(x[key], y[key])){
      return false;
    }
  }
  //return true if none of conditions above return false
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
