/**
 * 
 * STRING MANIPULATION:
 * 
 * 0. Strings are objects in javascript that can use built in functions to manipulate their values. You can manipulate the entire
 *      string or access individual characters in a string using bracket notation.
 * 
 * Common manipulations used in Bootcamp (there are more)
 * 1. toLowerCase() - turns uppercased string into lowercased string
 * 
 * 2. toUpperCase() - turns lowercased string into uppercased string
 * 
 * 3. .split() - splits string into an array at whatever is indicated. i.e space, dash, comma etc.
 * 
 * 4. concat() - joins strings together. Can use method or plus (+) operator
 * 
 * 5. slice() - takes a section of a string and returns a new string
 * 
 **/
 
 //1. toLowerCase()
 var case1 = "MAKE ME SMALLER";
 var lowered = case1.toLowerCase();
 console.log(lowered); // ==> prints: make me smaller
 
 //2. toUpperCase()
 var case2 = "make me bigger";
 var upper = case2.toUpperCase();
 console.log(upper); // ==> prints: MAKE ME BIGGER
 
 //3. split()
 var string = "You will split me into an array";
 var splitStr = string.split(" ");// split string at 'space'. if not split at spaces in sentence, space will be included in array
 console.log(splitStr); // ==> prints: ['You', 'will', 'split', 'me', 'into', 'an', 'array']
 
 //4. concat()
 var string2 = "Add me to";
 var string3 = " the rest of the string";
 var concat = string2.concat(string3);
 console.log(concat); // ==> prints: "Add me to the rest of the string"
 var concatOp = string2 + string3; // can use plus (+) operator to concat strings
 console.log(concatOp); // ==> prints: "Add me to the rest of the string"
 
 //5. slice()
 var string4 = "Slice me";
 var sliced = string4.slice(6, 8); //stops at index 6, slices everything in front of it, excluding index 6 and counting the space the space
                                   //first number: character position you want to start. second number: character position you want to end.
 console.log(sliced); // ==> prints: "me"
                     //  ==> sliced text: "Slice " 