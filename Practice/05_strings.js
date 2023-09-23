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



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let tagline = "Buy a company, not Products";

console.log(tagline.length); //27
console.log(tagline.charCodeAt(6));//99
console.log(tagline.substring(4, tagline.length-2));//a company, not Produc
console.log(tagline.replace("Buy", "Purchase"));//Purchase a company, not Products
console.log(tagline.substr(2, 24));//y a company, not Product
console.log(tagline.toLowerCase());//buy a company, not products
console.log(tagline.toUpperCase());//BUY A COMPANY, NOT PRODUCTS
console.log(tagline.toLocaleLowerCase());//buy a company, not products
console.log(tagline.toLocaleUpperCase());//BUY A COMPANY, NOT PRODUCTS



let taglineTrim = "   Buy a company, not Products          ";
console.log(taglineTrim.trim());//Buy a company, not Products


let taglineExtraTrim = "   B     u     y a company, not Products          ";
//This will trim the spaces only from start and end of the string
console.log(taglineExtraTrim.trim());//B     u     y a company, not Products.

console.log(taglineTrim.trimEnd());//   Buy a company, not Products

console.log(taglineTrim.trimStart());//Buy a company, not Products          

console.log(taglineTrim.trimLeft());//Buy a company, not Products          


console.log(taglineTrim.trimRight());//   Buy a company, not Products

console.log(tagline.includes("hello"));//false
console.log(tagline.includes("company"));//true
console.log(tagline.charAt(8));//m


console.log(tagline.charAt(8,10, 12));//m //Because it only accepts only one argument


console.log(tagline.concat(":Stockpedia"));//Buy a company, not Products:Stockpedia
console.log(tagline.startsWith("B"));//true
console.log(tagline.endsWith("s"));//true
console.log(tagline.indexOf("s"));//26 //length is 27 but the index of last character is 26 because of zero based indexing 
console.log(tagline.repeat(2));//Buy a company, not ProductsBuy a company, not Products

let taglineExtend = "Buy a company, not Products of a company";
console.log(taglineExtend.length());//40
console.log(taglineExtend.lastIndexOf("y"))//39

console.log(taglineExtend.match(/[A-Z]/g));//B , P


//Note: For using the padEnd 1st argument should be greater than the length of your string.
console.log(tagline.padEnd(30, "?"));//Buy a company, not Products???

console.log(tagline.padStart(30, "?"));//???Buy a company, not Products


console.log(tagline.search("o"));//7 //Returns the index number of the character or word
console.log(tagline.slice(4,13));//a company
console.log(tagline.split(""));//[ "B", "u", "y", " ", "a", " ", "c", "o", "m", "p", … ] //It breaks down the string





