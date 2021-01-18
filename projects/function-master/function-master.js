//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   var newArr = [];
   for(var key in object){
       if(typeof object[key] === "string"){
           newArr.push(object[key]);
       }
   }
    return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    }else{
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split string into array of string words
   var splitStr = string.split(" ");
   //loop through array
    for(var i = 0; i < splitStr.length; i++){
        //if there is a value at element then do a thing
        if(splitStr[i]){
         //access word in word array,uppercase first char, then slice the rest back on
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
        }
        string = splitStr.join(" ");
    }
    return string;
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    if(object.hasOwnProperty('name')){
        return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) +"!";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //object could not exist or be an array literal with no noises
    if(!object.hasOwnProperty("noises") || object.noises.length <= 0){
        return "there are no noises";
    }
    return object.noises.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
//       var data = "This is a super awesome string of words";
//       assert.strictEqual(hasWord(data, "awesome"), true);
//       assert.strictEqual(hasWord(data, "words"), true);
//       assert.strictEqual(hasWord(data, "turtle"), false);
//     })

// function hasWord(string, word) {
//   if(string.includes(word)){
//       return true;
//   }
// return false;
// }
/////////////////////////////////////
function hasWord(string, word) {
    //turn string into array
    var strArr = string.split(' ');
    //loop array
    for(var i = 0; i < strArr.length; i++){
        //if word at index is === word param return true
        if(strArr[i].toLowerCase() === word.toLowerCase()){
           return true; 
        }
        
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//* global addFriend */
    // QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
    //   assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
    //   assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
    // }
function addFriend (name, object) {
    //if name if NOT in object, add to friends array and return object
    if(object.friends !== name){
        object.friends.push(name);
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//* global isFriend */
    // QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
    //   assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
    //   assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
    //   assert.equal(isFriend("chuck",{}), false);
    // });
function isFriend(name, object) {
    //check if object has property of friends & if object array of friends includes name param
    if(object.hasOwnProperty('friends') && object.friends.includes(name)){
        //if yes, return true
        return true;
    }
    //return false
    return false;
}

////////////////////////////////// ////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
//       var data = [
//         {name: "Jimmy", friends:["Sara", "Liza"]},
//         {name: "Bob", friends:[]},
//         {name: "Liza", friends: ["Jimmy"]},
//         {name: "Sara", friends: ["Jimmy"]}
//       ];
//       assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
//       assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
//       assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
//     });
function nonFriends(name, array) {
    //name is a string, array is list of people
    var nonFriends = [];
    //loop array
    for(var i = 0; i < array.length; i++){
    //if at array index (object) has name value matches name param OR object has friend key that includes
        if(array[i].name === name || array[i].friends.includes(name)){
            //don't stop the loop
            continue;
        }else{
            //continuing through loop - push name at index (object) into non friends array [if not included in object.]
            nonFriends.push(array[i].name);
        }
         
    }
    //return array outside of loop
    return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
//     })
function updateObject(object, key, value) {
    //
        object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}