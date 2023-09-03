//STRING METHODS

//Find the length of a string
    //You can find the length of a string by writing .length after the string variable or string literal.
        console.log("Cyberian Husky".length);


//Bracket Notation to find the position of a character in a string
    //zero based indexing
    const firstName = "Ironman"
    const getPosition = firstName[1]
    console.log(getPosition)

//String Immutability
    //In js string values are immutable (Can't be alterd once created)
        let myname = "Ravi"
        myname[1] = "K"
        console.log(myname) //output: Ravi
    //Only way to change is to assign it to a new value
        myname = "Kavi"
        console.log(myname)

//Bracket Notiation to find the last character in a string
    //Subtract one from string's length
        myname = myname[myname.length-1]
        console.log(myname)//output: i

//Bracket Notation to find the Nth to Last character in a string
    //finding the value of the 3rd to last letter
        let lastName = "Chauhan"
        let getThirdToLastPosition = lastName[lastName.length-2]
        console.log(getThirdToLastPosition)