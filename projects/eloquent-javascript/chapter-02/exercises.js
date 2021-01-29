
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //loop starting with one # until the length is equal to param (num), increment by adding i & # 
 for(let i = "#"; i.length <= num; i = i + "#")
   console.log(i);
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //loop through numbers 1 - 15 
  for(let i = 1; i <= 15; i++){
    //if number is divisible by 5 AND 3
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz")
      //if divisible by 3 only
    }else if(i % 3 === 0){
      console.log("fizz")
      //if divisible by 5 only
    }else if(i % 5 === 0){
      console.log("buzz")
      //not divisible by either
    }else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //start with empty string and add to it as we iterate
  let board = "";
  //iterate through numbers
  for(let i = 0; i < num; i++){
    //create another loop for the next line
    for(let y = 0; y < num; y++){
      //if numbers iterations sum is even add a space
      if((i + y) % 2 === 0){
        board = board + " ";
      }else{
        //if not even add a #
        board = board + "#"
      }
    }
    //at the end of each loop, add a new line
    board = board + "\n";
  }
  //print board outside of loops, inside of function
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
