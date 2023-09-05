//Passing values to functions with Arguments
    //Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
    //When a function is defined, it is typically defind along with one or more parameters

//Return a value from a function with return 
    //We can pass vlaues into a function with arguments, You can use a return statement to send a value back out of a function
        function plusFive(num){
            return num+3
        }

        const answer = plusFive(5)
        console.log(answer) //Output: 8

//Global Scope and Functions
    //Scope refers to the visibility of variables
    //Variables defined outside of a function block have global scope
    //They can be accessed anywhere in your javascript code
    /* NOTE: 
    Variables are automatically created in the global scope. 
    This can create unintended consequences elsewhere in your code or when running a function again.
    You should always declare your variables with let or const 
    */