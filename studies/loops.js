/**
 * 
 * LOOPS:
 * 
 * 0. Are built in ways to quickly iterate through Arrays & Objects. They repeat a block of code the set amount of times.
 * 
 * 1. For Loop - loops until set code condition is false, done in three (3) statements
 *                  a. initialize/start
 *                  b. condition to loop/where to stop
 *                  c. increment or decrement
 *                  d. run block of code inside curly braces
 * 
 * 2. WHile Loop - loops until set condition is true, uses keyword:
 *                  a. while
 *                  b. declare variable outside loop
 *                  c. parenthesis, with a condition that will run until false
 *                  d. increment or decrement 
 *                  e. run block of code inside curly braces
 *                  
 * 
 * 3. For-In Loop - used to loop objects. It pulls out the objects keys one by one. We are able to access the value
 *                      using bracket notation.
 *                  a. keyword: for key in
 *                  b. variable key in object name in parenthesis
 *                  c. run block of code inside curly braces
 **/
 
 //1. For Loop
 for(/*start*/ let i = 0; /*stop*/ i <= 10; /*increment*/ i++){
     /*run this code until above condition is met*/
     console.log(i); // ==> prints: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 }
 
 //2. While Loop
 var start = 5;
 while(start >= 0/*start & stop*/){
     console.log(start); // ==> prints: 5, 4, 3, 2, 1, 0
     start--; // decrement
 }
 
 //3. For-In Loop
 var petObj = {
     name: "Delia",
     age: 5
 };
 
 //Print values using bracket notation
 for(var key in petObj){
     console.log(petObj[key]); // ==> prints objects values: Delia, 5
 }
 
 //Print object
 for(var key2 in petObj){
     console.log(petObj); // ==> prints { name: 'Delia', age: 5 }
                                      //{ name: 'Delia', age: 5 }
 }
 
 //Print keys
 for(var key3 in petObj){
     console.log(key3); // ==> prints: name, age
 }
 
 //Loop forward over an Array
 var array = [200,400, 600, 800];
 for(let i = 0; i <= array.length; i++){
     console.log(array[i]); // ==> prints: 200, 400, 600, 800
 }
 
 //Loop backwards over Array
 for(let i = array.length -1; i >= 0; i--){
     console.log(array[i]); // ==> prints: 800, 600, 400, 200
 }