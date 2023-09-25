//Objects can be defined by 2 types
//Constructor //Singleton //object.create

//Ojects Literals

const mysym = Symbol("Introduction");

console.log(mysym);//Introduction
console.log(typeof mysym);//symbol

const jsuser = {
    name: "Ravi",
    "full name": "Ravi Chauhan",
    age: 15,
    mysym: "Introduction",
    email: "ravi@mail.com",
    isLoggedIn: false,
    loggedInDays: ["Monday", "Friday"]
}

console.log(jsuser.email);//ravi@mail.com
console.log(jsuser["isLoggedIn"]);//false
console.log(jsuser[mysym]);//Introduction

jsuser.email = "ravi.chauhan@google.com";//It will update the current email
//Object.freeze(jsuser);//After freezing the object you can't change any value
console.log(jsuser);


jsuser.email = "ravi.chauhan@microsoft.com";//It will not change any value
console.log(jsuser);


//using a function in an object as it's property
jsuser.greeting = function () {
    console.log("Hello jsuser");
}

jsuser.greetingTwo = function () {
    console.log(`Hello js user . ${this.name}`);
}

console.log(jsuser.greeting);//greeting() //this will return the function name 
console.log(jsuser.greeting());//Hello jsuser

console.log(jsuser.greetingTwo);//greetingTwo()
console.log(jsuser.greetingTwo());//Hello js user . Ravi