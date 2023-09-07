//CHAINING IF ELSE STATEMENTS 
    //If else statments can be chained togather for complex logic
    //pseudocode of multiple chained if/else/if statements:-
        if(condition1){
            //statement 1
            }
            else if(condition2){
                //statement 2
            }else if(condition3){
                //statement 3
        }else {
                //statement n
        }

//SWITCH STATEMENTS
    //Used for Selecting from many options
    //Tests a value and can have many case statements which define various possible values
    //Statements are executed from the first matched case value until a break is encountered
        switch(lowercaseLetter){
            case "a":
                console.log("A")
                break
            case "b":
                console.log("B")
                break 
        }
        //case vlaues are tested with strict equality (===)
        //The break tells javascript to stop executing the statements
        //If the break is ommited, the next statement will be executed

//Multiple identical options in switch statements
    //Break statement ommited
    //If you have multiple inputs with the same output, you can represent them in a switch statement
    let result = " "
    switch(val){
        case 1:
        case 2:
        case 3:
            result = "1, 2 or 3"
        break
        case 4: 
            result = "4 alone"
    }
    //Cases for 1, 2 and 3 will produce the same result

//Returning BOOLEAN values from functions
    //all comparison operators return a boolean true or false value
    //somtimes people use an if/else statements to do a comparison
        function isEqual1(a,b){
            if(a===b){
                return true
            }
            else{
                return false
            }
        }

    //But there's a better way to do this. since === returns true or flase, we can return the result of the comparison
        function isEqual2(a,b){
            return a === b
        }

//Return Early Pattern for functions
    //when a return statement is reached, the execution of the current function stops and control returns to the calling location
        function myfunc(){
            console.log("Hello")
            return "World"
            //console.log("bye bye")
        }
        const valueOfMyfunc = myfunc()
        console.log(valueOfMyfunc)

//output will display the string hello in the console, and return the string world
//The string by bye will never display in the console, because the function exits at the return statement