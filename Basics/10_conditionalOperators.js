//Use the parseInt function
    //the parseInt() parses a string and returns an integer
        const a = parseInt("007")
    //it converts the string to 7
    //If the first character in the string can't be converted into a number, then it returns NaN

//Use the ParsInt function with Radix
    //The parseInt() parses a string and returns an integer. It takes the second argument for the radix, 
    //Which specifies the base of the number in the string
    //Radix can be an integer between 2 and 36
        parseInt(string, radix)
        const b = parseInt("11", 2)
    //The radix variable says that 11 is in the binary system or base 2.
    //This example converts the string 11 to an integer 3

//Use the conditional(Ternary Operator)
    //It can be used as a one line itself expression
    /*The sytax is a ? b : c, where a is the condition, b is the code to run when the condition returns true,
    and c is the code to run when the condition returns false. */

    //The following function uses an if/else statement to check a conditon
        function findGreater(a,b){
            if(a > b){
                return "a is greater"
            }else {
                return "b is greater or equal"
            }
        }

    //This can be rewritten using the conditional operator
        function findGraterValue(c,d){
            return b > c ? "a is greater" : "b is greater or equal"
        }


//Use multiple conditional (Ternary Operators)
    //Example of if, else, if and else statement
        function findGreaterOrEqual(a,b){
            if(a === b){
                return "a and b are equal";
            }
            else if(a > b){
                return "a is greater";
            }
            else{
                return "b is greater";
            }
        }
    //The above function can be rewritten using multiple conditional operator
        function findGraterOrEqualValue(a,b){
            return (a === b) ? "a and b are equal" 
            : (a > b) ? "a is greater" 
            : "b is greater"
        }
    //It's a good practice to format multiple conditonal operators such that each conditon is on a separate line, as shown above.
    //Using multiple conditonal operators without proper indentation may make your code hard to read.