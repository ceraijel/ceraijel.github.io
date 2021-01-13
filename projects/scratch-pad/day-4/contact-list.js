// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list. -------------------------------
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.----------------------------------------------------------------------------------
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.-----------------------------------
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //make addContact function that takes an object (contact) and adds it to contact array
        addContact: function (contact){
            return contacts.push(contact);
        },
        //make findContact function that takes a string (fullName) & returns the object if found or undefined if fullName doesnt match
        findContact: function(fullName){
            //loop over array of contacts (holding objects)
            for(var i = 0; i < contacts.length; i++){
                //if fullName is equal to contacts at index (contacts[i]), return contact[i]
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                //return that contacts object
                return  contacts[i];
            }
            
            }
            //return undefined if not found
            return undefined; 
        },
        //make removeContact funct that takes a Object (contact) and removes it from contact list
        removeContact: function (contact){
          //loop over contact array
          for(var i = 0; i < contacts.length; i++){
              //if contact at index contacts[i] matches - remove contact
              if(contacts[i] === contact){
                  //use splice (what index to replace, how many elements to replace), first index, with 1 element
                 contacts.splice(0, 1); 
              }
          }
        },
        printAllContactNames: function(){
            //we want to add all names to one string, create variable with empty string to return
            var names = "";
            //loop over contacts array
            for(var i = 0; i < contacts.length; i++){
                //if index is the last contact, return full name with no line break at the end
                if(i === contacts.length - 1){
                  names += `${contacts[i].nameFirst} ${contacts[i].nameLast}`   
                }else{
                //otherwise/else add names to contacts first name and last name to variable with line break included
                names += `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`
            }
            
        }//return names string outside of loop
        return names;
    }

    }

}
// YOUR CODE GOES ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
