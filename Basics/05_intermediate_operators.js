//Stand in Line
    //Queue: is an abstract data structure  where items are kept in order
    //New items can be added at the back and old items are taken off from the front of the queue

//Boolean values 
    //Boolean values are never written with quotes

//OPERATORS
    //1. EQUALITY OPERATOR
    //In order for javascript to compare 2 different data types (ex. number and string), it must convert one type to another
    //This is know as TYPE COERCION, Once it does however it can compare terms as follows:
        1 == 1 //true
        1 == 2 //false
        1 == '1' //true
        "3" == 3 //true
        "2" == "2"

        const numcheck1 = "2"
        const numcheck2 = "2"
        const numsum = numcheck1 == numcheck2
        console.log(numsum) 

      //2. STRICT EQUALITY OPERATOR
      //Compares both the value and the datatype
      3 === 3 //true
      3 === '3' //flase 
      /*
      NOTE: 
      //Equality operator performs a type conversion and then evaluates the value
      //Strict Equality operator compares the datatype and value as it-is, without converting one type to the other
        3 == '3' //true because type converstion will happen
        3 === '3' //false because type is not matching      
      */

//Checking the datatype of a variable or a value
    typeof 3 //number
    typeof '3' //string 

     //3. INEQUALITY OPERATOR
     //Like the eqality operator, the inequality operator will convert data types of values while comparing
     1 != 2 //true
     1 != "1" //false
     1 != '1' //false
     1 != true //false
     0 != false //false

     //4. STRICT INEQUALITY OPERATOR
     //Logical opposite of the strict equality oprator
     //(Strictly not equal) Returns false where strcit equality would return true
     //Not convert data types
        3 !== 3 //false
        3 !== '3' //true
        4 !== 3 //true
    //5. GREATOR THAN OPERATOR
    //Like the equality operator, it will convert datatypes of values while comparing
        5 > 3 //true
        7 > '3' //true
        2 > 3 //false 
        '1' > 9 //false

    //6. GREATOR THAN EQUAL TO OPERATOR
    //It also convert data types while comparing
        6 >= 6 //true
        7 >= '3' //true
        2 >= 3 //false
        '7' >= 9 //false