let name = "Tobo";
let email = "hobotobo@mail.com";

// console.log("my name is " + name + " and my email is " +email); //Outdated syntax

// String Interpolation

//Use backticks
// console.log(`Hello my name is ${name} and my email is ${email}`);


//console.log(`Hello my name is ${name.touppercase()} and my email is ${email}`);
//Benefits of using string interpolation sytax is, we can also use some methods with the strings as well as above. 


//Another method of declaring a string 

let gameCount = new String('Football')

//run the above code in the browser console and check all the string functions and master them to master strings in js.

//Returns the character at the 0 index
console.log(gameCount[0]); //F


//Returns the object
console.log(gameCount.__proto__);//{} //It returns an empty object but it's not empty, you can check it in browser console.


//Finds the length of the string
console.log(gameCount.length);//8


//Finds the character at the given index
console.log(gameCount.charAt(3));//t

//Finds the index of the given character
console.log(gameCount.indexOf('t'));//3


//Divide the string into shorter part of the given range. 
const subStr = gameCount.substring(0, 4)

console.log(subStr);


//Slice the string from the given range like 0 to 4 characters. 
const slc = gameCount.slice(0, -4)// You can also use negative values. it will reverse the string. 

console.log(slc);


//Trim methods removes the extra spaces from aroun the string
const strTrim = "     name is ye ss ss"
console.log(strTrim);//Output:      name is ye ss ss
console.log(strTrim.trim());// Output: name is yesssss


//Removes the %20 (space) from the url with - (dash)
const url = "https:\\ravi.com\ravi%20chauhan";

console.log(url.replace('%20', '-'));

//Check if the string includes the given string? 

console.log(url.includes('ravi'));//Output: true


//Convert the string into an array based on dash(-) or spaces ( ), 
const newStrStr = "this-is-an-apple";

console.log(newStrStr.split("-"));