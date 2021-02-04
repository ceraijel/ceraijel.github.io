// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  if(n === 0){
    return 1;
  }else if(n < 0){
    return null;
  }
  //recursive case
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  if(array.length === 0){
    return 0;
  }
  //recursive case
  return array[0] + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base case
  if(n === 1){
    return false;
  }else if(n === 0){
    return true;
  }else if (n < 0){
    return isEven(n + 2);
  }
  //recursive case
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case
  if(n === 0){
    return 0;
  //base case
  }else if(n < 0){
    //recursive case if negative
    return (n + 1) + sumBelow(n + 1);
  }
  //recursive case if positive
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y){
  //if x is less than y i want to count up (add 1) until it equals y
  if(x <= y){
    //i want x to count up to y, when this base case ends up true
    if(x + 1 === y || x === y){
      //return literal array when
      return [];
    }
    //when y is greater than x
    return [x + 1].concat(range(x + 1, y));
    //otherwise if x is greater than y, count down to get the range
  }else if(x - 1 === y || x === y){
    return [];
  }
  //when x is greater than y [10, 5]
  return [x - 1].concat(range(x - 1, y));
 
}



// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case, what i want to end with
  //i want the base to multiply by itself
  //for positive numbers
  if(exp === 0){
    return 1;
  }
  //if numbers are negative
  if(exp < 0 || base < 0){
    return 1 / (base * exponent(base, (exp * -1 - 1)));
  }
  //recursive case for positive
  return base * exponent(base, exp - 1)
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base case, where i want to end
  //returning a boolean so i need to check for true and false
  //if true
  if(n === 1){
    return true;
    //if false
  }else if (n < 1){
    return false;
  }
  //recursive case, how i get there.
  //to check if its a power of 2, i want to divide n by 2??
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
// "Washington"
var reverse = function(string) {
  //base case, if string is empty?
  if(string === ""){
    return "";
  }else{
    //recursive case. i want to slice at the first index, reverse the first charcter in string [0]
    //and then concat the rest of the string
  return reverse(string.slice(1)) + string.charAt(0);
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //says to ignore spaces and cap letters
  //will split string into array then join without spaces
  //then i will lowercase the entire string
  var newStr = string.split(" ").join("").toLowerCase();
  //base case if true
  if(newStr.length === 0){
    return true;
    //base case if false. if first letter doesn't equal last letter
  }else if(newStr[0] !== newStr[newStr.length - 1]){
    return false;
  }
  //recursive case
  return palindrome(newStr.slice(1, newStr.length - 1));
};

//SKIP
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
//multiply is adding a number to itself x number of times
//base case. where am i going? when x and y equal 0?
var multiply = function(x, y) {
  if(y === 0){
    return 0;
  }
  if(y > 0){
    return x + multiply(x, y - 1);
  }
  if(y < 0){
    return -x - multiply(-x, y + 1);
  }
  
};
//SKIP
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};
//SKIP
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case for true
  if(str1.length === str2.length){
    return true;
    //
  }else if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base case
  if(str.length === 0){
    return [];
  }
  //recursive case
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base case
  if(array.length === 0){
    return [];
  }
  //recursive case
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case
  if(length === 0){
    return [];
  }
  //recursive case
  return buildList(value, length - 1).concat([value]);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base case
  if(array.length === 0){
    return 0;
  }
  //recursive case 
  //if value at array index is equal to value (not array[i] bc no loop; index 0 because we are slicing down the array) 
  if(array[0] === value){
  //count the value
  //recursive case, one step to get closer to base case. slicing through the array
  return countOccurrence(array.slice(1), value) + 1;
  }
  //if element at index is not equal to value, keep looping (call recursive without adding)
  if(array[0] !== value){
    return countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base  case, i want to get to the end of the array
  if(array.length === 0){
    return [];
  }
  //recursive case. if array has values
  if(array.length !== 0){
    //apply callback on the first element in array then slice to make next element the first element
     return  [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
  
};
//SKIP
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};
//SKIP
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};
//SKIP
// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};
//SKIP
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

var nthFibo = function(n) {
  //fibo is the sum of the 2 numbers in front of an index given 
  //index 7 is 13, the two numbers in front are 8 & 5 = 13
  //n is the index we are going to 
  //base case, where to stop 
  if(n === 1){
    return 1;
  }                                           // the sequence
  if(n < 0){                                  //[0,1,1,2,3,5,8,13,21]
    return null;            
  }
  if(n === 0){
    return 0;
  }
  //recursive case. one step i can keep repeating
  //return function call. so if n = 7 
  //go to index 7 - 1 (index 6 = 8)
  //go to index 7 - 2 (index 5 = 5) and add them together 8 + 5 = 13
  if(n >= 2){
  return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base case
  if(input.length === 0){
    return [];
  }
  //recursive case
  //uppercase first word in array, concat (bc these are arrays) recursive call to move through array
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base case, keep recursing until true
  if(array.length === 0){
    return [];
  }
  //recursive case - one step that will repeat through array
  //everything before .concat is what i want to do before moving to the next element in array (recursing)
  //at first word in array, uppercase charAt(0), this returns a string of first letter uppercased 
  //add the rest of the letters back to the word & surround in [] to make array before recursing to the next
  return [array[0].charAt(0).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};
//SKIP
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};
//SKIP
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = function(str, obj = {}) {
  //if i start with a empty obj, i can check if it has the str as a prop in it
  //base case. will slice str until empty
  if(str.length === 0){
    return obj;
  }
  //recursive case -call function and one thing that i can repeat to get to base case
  letterTally(str.slice(1), obj);
  //while looping
  //if first char in str is not key in object (=== undefined), add it and + 1?
  if(obj[str[0]] === undefined){
    obj[str[0]] = 1;
  }else{
  //if the char is already in obj, +1
    obj[str[0]] += 1;
  }
  //return obj to function
  return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]


var compress = function(list) {
  //base case - when the array is empty
  if(list.length === 0){
    return [];
  }
  //store recursive call in variable
  var compressedVar = compress(list.slice(1))
  //if first element is equal to second element
  if(list[0] !== compressedVar[0]){
    //add element to compressed array
   compressedVar.unshift(list[0]) 
  }
  //return compressed array to function
  return compressedVar;
};
//SKIP
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base case
  if(array.length === 0){
    return [];
  }
  let newArr = minimizeZeroes(array.slice(1)) 
  //recursive case - 
  if(array[0] !== 0 || newArr[0] !== 0){
    newArr.unshift(array[0])
  }
  return newArr;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //base case TURN EVERY OTHER ELEMENT OPPOSITE
  if(array.length === 0){
    return [];
  }
  //modify values as needed then recursion call
  let firstInd = array[0];
  let secondInd = array[1];
  //make first index positive, make second index negative, add to rest of the array after modifying
  return [Math.abs(firstInd), -Math.abs(secondInd)].concat(alternateSign(array.slice(2)))
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //base case until string is empty
  if(str.length === 0){
    return "";
  }
  //store recursion call inside variable
  //call function and slice from beginning to end
  let numToStr = numToText(str.slice(0, str.length -1))
  //recursive case
  //create replacement variable that will change depending on what number we encounter while looping
  let replacement;
  //use switch statement to look at an entire expression (a string)
  switch (str[str.length -1]){
    //while looking at the entire string if it finds a case (a number as a string value ex: "9") 
    //make replacment variable equal that number as the text version of it (ex: "nine")
    case'1': replacement = "one"
    break;
    case'2': replacement = "two"
    break;
    case'3': replacement = "three"
    break;
    case'4': replacement = "four"
    break;
    case'5': replacement = "five"
    break;
    case'6': replacement = "six"
    break;
    case'7': replacement = "seven"
    break;
    case'8': replacement = "eight"
    break;
    case'9': replacement = "nine"
    //once all or no string numbers are found in the expression, default to printing the whole string
    default: replacement = str[str.length - 1]
    break;
  }
  //call recursion (stored in a variable) & add it to the replacement & return to function
  return numToStr + replacement;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
