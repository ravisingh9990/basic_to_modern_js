//Passing values to functions with Arguments
    //Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
    //When a function is defined, it is typically defind along with one or more parameters

//Return a value from a function with return 
    //We can pass vlaues into a function with arguments, You can use a return statement to send a value back out of a function
        function plusFive(num){
            return num+3
        }

        const answer = plusFive(5) //calling a function by storing it into variable
       // console.log(answer) //Output: 8

//Global Scope and Functions
    //Scope refers to the visibility of variables
    //Variables defined outside of a function block have global scope
    //They can be accessed anywhere in your javascript code
    /* NOTE: 
    Variables are automatically created in the global scope. 
    This can create unintended consequences elsewhere in your code or when running a function again.
    You should always declare your variables with let or const 
    */

//Global scope an functions
    //Variables which are declared within function, as well as the function parameters, have local scope.
    
//Golbal vs Local scope in functions
    //Local and Global variables with the same name are allowed
    //Local variables take precedence over global variable
        const mycar = "Toyota"
         function car(){
            const mycar = "Mercedes GLE"
            return mycar
         }
      // console.log(car()) //calling a function using console.log

//Understanding undefined value returned from a function
    //Including a return statement is not compulsary 
    //If a function doesn't have a return statement, it will process the code but returned value is undefined
         let sum = 0
         function addsum(num){
            sum = sum+num
         }
        // console.log(addsum(2)) //Output: Undefined (Because return statement was not included in function)
        // console.log(sum) //Output: 2, (The code has been processed)
    
//Assignment with a returned value
    //Everything to the right of the equal sign is resolved before the value is assigned
    //This means we can take the value of a function and assign it to a variable
         function addnumbers(num1, num2){
            return num1+num2
         }
         const total = addnumbers(5,10)
        // console.log(total) //Output: 15