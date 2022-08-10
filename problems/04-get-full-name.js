/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstname: 'john', lastname: 'doe'};
getfullname(p1); // => 'john doe'
let p2 = {firstname: 'charlie', lastname: 'brown', age: 9};
getfullname(p2); // => 'charlie brown'
***********************************************************************/

function getFullName(person) {
  // Your code here
  let { firstname: firstName, lastname: lastName }  = person
  console.log(`${firstName} ${lastName}`)
}

let p1 = {firstname: 'john', lastname: 'doe'};
getFullName(p1); // => 'john doe'
let p2 = {firstname: 'charlie', lastname: 'brown', age: 9};
getFullName(p2); // => 'charlie brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
