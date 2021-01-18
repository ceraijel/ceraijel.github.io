/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//animals - an array
function search (animals, string){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === string){
            return animals[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//animals - array
//
function replace (animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals[i] = replacement;
        }
    }
    return animals[i];
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove (animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals.splice(i, 1)
        } 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Checks that the animal Object has a name property with a length > 0.

// Checks that the animal Object has a species property with a length > 0.

// Has a unique name, meaning no other animals have that name.

// Adds this new Object to the animals Array, only if all the other conditions pass.

// Make sure it works
//animals - array
//animal - object
function add (animals, animal){
    //if animals name & species > 0 do a loop over array
    if(animal.name.length > 0 && animal.species.length > 0){
        //loop over animals array
        for(let i = 0; i < animals.length; i++){
            //if animal name (in object) (edgecase) is equal to animals name in array (edgecase) 
            if(animal.name.toLowerCase() === animals[i].name.toLowerCase()){
                //return animals array (no changes)
                return animals;
            } else {
                //else - if animal name in object is not same as animals name in array - push animal object into animals array
                return animals.push(animal);
            }
        }
    }
}
    

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
