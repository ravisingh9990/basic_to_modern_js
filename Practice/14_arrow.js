//Current context (this keyword)

const username = {
    username: "Ravi",
    price: 999,
    welcomeMessage : function(){
        console.log(`Hello ${this.username}, welcome to stocpedia`);
    }
}

username.welcomeMessage;//welcomeMessage()
username.welcomeMessage();//Hello Ravi, welcome to stocpedia

username.username = "sam";
username.welcomeMessage()//Hello sam, welcome to stocpedia


// Global context in node is {}
// Global context in browser is window


//DO it

console.log(this);//Print this in node
console.log(this);//Print this in browser
console.log(this);//Print this in a function

function chai(){
    console.log(this);
}
function chaikacode(){
    const username = "Ravi";
    console.log(this.username);
}

chaikacode();//Undefined
//This will not work, because the this keword only works with objects
//not with functions


const chaiandcode = () => {
    const username = "Ravi";
    console.log(this.username);//This line will print undefined
    console.log(this);//This will return an empty object
}

chaiandcode();


//Arrow functions

const arrowfunc = (num1, num2) => {
    return num1 + num2
}

console.log(arrowfunc(5, 6));//11


//Implicit Return 

//Removes the curly braces and retrun keyword
//Is a single line funtion

const arrfun = (num1, num2) => num1 + num2
console.log(arrfun(5, 6));//11

//You can wrap them in parentheses
//If you wrap them in curly braces you have to write retrun keyword 
//But if you wrap them in prarenthese, you don't have to write return keyword

const arrfunc = (num1, num2) => (num1 + num2)
console.log(arrfunc(5, 6));//11


//Implicit retrun is when you don't have to write 'return' keyword
//Explicit retrun is when you have to write 'return' keyword


//use of parenthese is important for returnig an object 

const arrfunct = (num1, num2) => ({username: "ravi"})
console.log(arrfunct(5, 6));
//for returning an object you have to wrap it into parentheses
//If you don't wrap it into parantheses the function will understand it as it's scope and
//it will expect retrun keyword, so it will throw an error.
