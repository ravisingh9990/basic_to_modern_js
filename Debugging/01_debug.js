//Use js console to check the value of a variable
        let num1 = 5;
        let num2 = 6;
        //++num1;
        num1++;

        let sum = num1 + num2;
        //console.log(num1);//6
        //console.log(sum);//Output: 12


//Different console methods

    //log, warn, clear

    // console.clear()//Used to clear the browser console


//using the typeof() to check the data type of a variable

    // console.log(typeof([]));
    // console.log(typeof(""));
    // console.log(typeof({}));
    // console.log(typeof(34));

//7 primitive(immutable) datatypes of js
    /*
    string
    number
    boolean
    null
    undefined
    symbol
    bigInt
    */ 

//1 type of non-primitive(mutable) data type 
    //Object


    //Note: arrays are technically a type of object in js.


//Catch misspelled variables and function names
    //It will have the browser looking for the object that doesn't exist.
    //and complain in the form of a reference error.


//Catch unclosed parentheses, brackets, braces and quotes.

    /*
    One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match,
    then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the 
    second half of the pair automatically.
    */

//Catch mixed usage of single and double quotes
    //Don't use the same quotes in a single string more than once


//Catch use of assignment operator instead of equality operator

        let x = 7;
        let y = 9;
        let result = "to come";

        if(x == y) {
        result = "Equal!";
        } else {
        result = "Not equal!";
        }

        //console.log(result);


//Catch missing open and closing parenthese after a function call

    /*
    When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing
    parentheses when calling it. Often times the result of a function call is saved in a variable for other use in 
    your code. This error can be detected by logging variable values (or their types) to the console and seeing that
    one is set to a function reference, instead of the expected value the function returns. 
    */

        function myFunction() {
            return "You rock!";
        }
        let varOne = myFunction;
        let varTwo = myFunction();

//Catch arguments passed in a wrong order when calling a function

    /*
    the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the 
    arguments are different types, such as a function expecting an array and an integer, this will likely throw a 
    runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't 
    make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.
    */


//Cath off by one errors when using indexing

    /*
    Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or 
    array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at 
    zero, not one, which means the last index is always one less than the length of the item. If you try to access 
    an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

    When you use string or array methods that take index ranges as arguments, it helps to read the documentation and 
    understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some 
    examples of off by one errors:
    */

        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let len = alphabet.length;
        for (let i = 0; i <= len; i++) {
        //console.log(alphabet[i]);
        }
        for (let j = 1; j < len; j++) {
        //console.log(alphabet[j]);
        }
        for (let k = 0; k < len; k++) {
        //console.log(alphabet[k]);
        }

    //The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). 
    //The third example is correct.

        function countToFive() {
            let firstFive = "12345";
            let len = firstFive.length;
            // Only change code below this line
            for (let i = 0; i < len; i++) {
            // Only change code above this line
            //console.log(firstFive[i]);
        }
        } 
      
        countToFive();


//Use caution when re-initializing variables inside a loop

    /*
    Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential 
    issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly 
    dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.
    */

    /*
    Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related 
    to resetting, or failing to reset a variable.
    */

        function zeroArray(m, n) {
            // Creates a 2-D array with m rows and n columns of zeroes
            let newArray = [];
            
            for (let i = 0; i < m; i++) {
            // Adds the m-th row into newArray
            let row = [];
            for (let j = 0; j < n; j++) {
                // Pushes n zeroes into the current row to create the columns
                row.push(0);
            }
            // Pushes the current row, which now has n zeroes in it, to the array
            newArray.push(row);
            }
            return newArray;
        }
        
        let matrix = zeroArray(5, 4);
        //console.log(matrix);


//Prevent infine loops with a valid terminal condition

    /*
    It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, 
    is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal 
    condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or 
    decrementing it.
    */

    //DO NOT RUN THIS PROGRAM
        // function myFunc() {
        //     for (let i = 1; i != 4; i += 2) {
        //     console.log("Still going!");
        //     }
        // }
    
    //Solution to this is 'set the comparison condition i<=4' to jump out of the loop.

    
        
            
        