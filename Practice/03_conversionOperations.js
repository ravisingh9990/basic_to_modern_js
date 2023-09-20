//Type coersion
/*
 Type conversion is similar to type coercion because they both convert values from one data type to another with one
 key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
*/
//String to Number
    
    //Declaring a string variable
    let score = "052"

    //Converting the value of the variable into Number
        let valuleInNumber = Number(score)

    //Checking the datatype of the variable after the conversion
        //console.log(typeof(valuleInNumber));

    //Checking the converted value
        //console.log(valuleInNumber)


//Always keep the first letter of the datatype in capital like: Number, String, Boolean etc.




//The datatype of the 'marks' will be conveted to number, 
//But, the value in the of the variable will become NaN after the conversion 

        let marks = "34abc" 

        let myMarks = Number(marks)

        //console.log(typeof(myMarks))//Output: number

        //console.log(myMarks)//Output: NaN, 
        
/*
NOTE: 
    null into number => 0
    undefined into number =>  NaN
    string into number => NaN
    boolean => 1 or 0
    1 => true
    0 => false
    "" => false
    "Ravi" => true
*/


//**********************************Operations**********************************/

        let value = 4;
        let negValue = -value;
        // console.log(negValue); //Output: -4

        // console.log(2 + 2);
        // console.log(2 - 2);
        // console.log(2 * 2);
        // console.log(2 / 2);
        // console.log(2 ** 2);
        // console.log(2 % 2);

        let firstName = "Ravi"
        let LastName = " Chauhan"
        let fullName = firstName + LastName
        //console.log(fullName)

        // console.log("1" + 2)
        // console.log(1 + "2")
        // console.log("1" + 2 + 2)
        // console.log(1 + 2 + 2)

        //Read Operator Precedence *****************

        //console.log(3 + 3 * 4 / 5);

        //console.log((3 + 3) * 4 / 5);

        //console.log(true);

        //console.log(+true);

        //console.log(true+);

        //console.log(true+);

        //console.log(true++);

        let gameCounter = 100;
        gameCounter++
        //++gameCounter
        //console.log(gameCounter);

        //Read about Prefix and Postfix ******************

        // console.log("2" > 1);
        // console.log("02" > 1);
        

        // console.log(null > 0); false
        // console.log(null < 0); //false
        // console.log(null == 0); //false
        // console.log(null >= 0); //true


/*************************************************************************************************************/
const val1 = "4";
const val2 = 5;

const ttl = val1 + val2;

//console.log(ttl)//Output: 45

const totalval = Number(val1) + val2;

console.log(totalval)//Output: 9


/*************************************************************************************************************/

