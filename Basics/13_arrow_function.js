//Arrow functions
    /*
    In js, we often don't need to name our functions, especially when passing a function as an argument to another 
    function. Insted we create inline functions. 
    
    We don't need to name these functions because we do not reuse them anywhere else.
    */
        const myFunc = function(){
            const myvar = "value"
            return myvar
        }
    /*
    ES6 provides us with the syntactic sugar to not have to write anonymous functons this way. 
    Instead, you can use Arrow function syntax:
    */
        const myFunction = () => {
            const myvar = "value"
            return myvar
        }
    /*
    When there is no function body, and only a return value, arrow function syntax allows you to omit the
    keyword return as  well as the brackets surrounding the code.

    This helps simplify smaller functions into ine line statements.
    */
        const myfun = () => "value"
    //This code will still return the string value by default.


//Write Arrow Function with parameters
    //Just like a regular function, you can pass argumnets into an arrow function. 
        const doubler = (item) => item * 2
        doubler(4)//Output: 8

    //If an arrow function has a single parameter, the parentheses elclosing the parameter may be omitted.
        const double = itmes => itmes * 2

    //It is possible to pass more than one argument into an arrow function.
        const multiplier = (itemss, multi) => itemss * multi
        const myval = multiplier(4, 2)
        //console.log(myval)//Output: 8


//Set Default Parameters for your functions

        const greeting = (name = "User") => "Hello " + name
        //console.log(greeting("Ravi")) //Output: Hello Ravi
        //console.log(greeting())//Output: Hello User
    //You can add default values for as many parameters as you want.


//Use the Rest parameter with function parameters

    //With the rest parameter, you can create functions that take a variable number of arguments. 
    //These arguments are stored in an array that can be accessed later from inside the function.
        function howMany(...args){
            return "you have passed " + args.length + " arguments.."
        }
        //console.log(howMany(0,1,2))//Output: you have passed 3 arguments..
        //console.log(howMany("string", null, [1,2,3], {}))//Output: you have passed 4 arguments..
    
    //The rest parameter eliminates the need to use the arguments object and alloes us to use array methods
    //on the array of parameters passed to the function 'howMany'.


//Use the spread operator to ealuate Arrays in place
    
    //Spread operator allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
    //using apply() to compute the maximum value in an array
        var arr = [6, 89, 3, 45]
        var maximus = Math.max.apply(null, arr)
        //console.log(maximus)//Output: 89
    
    //we had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN.
    //Math.max() expects comma separated arguments, but not an array.
    //The spread operator makes this syntax much better to read and maintain.
        const arrr = [6, 89, 45, 4]
        const maxi = Math.max(...arrr)
        console.log(maxi)//Output: 89

    //...arrr returns an unpacked array. 
    //In other words, it spreads the array. However, the spread operator only works in-place, like in an argument
    //to a function or in an array literal.

    //The following cod will not work
        //const spreaded = ...arrr


