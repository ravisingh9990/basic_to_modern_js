"use strict"; //treat all js code as newer version

//alert(4 + 4) //Output(error): alert is not defined
//we are using node js, not browser


console.log(7 
    +
    5); //code readability should be high



//Documentation: TC39, and MDN Docs


//Datatypes
//Primitive datatypes(Stored in Stack Memory)
//Access a copy of the variable
    //String
    //number
    //Boolean
    //Bigint
    //Symbol
    //null
    //undefined

//Non primitive/reference datatypes(Stored in Heap Memory)
//Access a reference of the variable
    //object
    //array


let age = 34
let name = "tobo"
let height = null
let weight = undefined

console.log(typeof height); //object
console.log(typeof(weight)); //undefined

//console.table([age, name, height, weight])