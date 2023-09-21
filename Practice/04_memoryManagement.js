//Stack and Heap

    /*Datatypes: 
        Primitive (Stack) (You get a copy of the original value)
        //Change in the copy will not change the original value
    */
        let myChannel = "Stockpedia";
        let financeChannel = myChannel;
        financeChannel = "Robotonics";

        console.log(myChannel);//Output: Stockpedia
        console.log(financeChannel);//Output: Ronotonics

    /*
        Non-Primitive (Heap) (You get the reference of the original value)
        //Change in the reference will also change the original valule
    */

        let userOne = {
            name: "tobo",
            email: "hobotobo@mail.com",
        }

        let userTwo = userOne;
        userTwo.name = "Hobo"

        console.log(userOne);//Output: Hobo
        console.log(userTwo);//Output: Hobo

        