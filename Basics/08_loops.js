//While loop
    //Running the same code until the specified condition is true
        const ourArray = []
        let i = 0
        while(i < 5){
            ourArray.push(i)
            i++
        }
        //console.log(ourArray) //Output: [ 0, 1, 2, 3, 4 ]

//For loop
    //Most common type of javascript loop
    //Runs only a specified number of times
    /*Condition statement is evaluated at the begining of every loop iteration and will continue as long as it evaluates to true.
    When the condition is false at the start of the iteration, the loop will stop executing.
    This means if the condition start as false.*/
    //Final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
        const forArray = []
        for(let i = 0; i < 5; i++){
            forArray.push(i)
        }
        //console.log(forArray) //Output: [ 0, 1, 2, 3, 4 ]

    //Iterate odd numbers with a for loop
        const oddArray = []
        for(let i = 1; i < 10; i +=2){
            oddArray.push(i)
        }
        //console.log(oddArray) //Output: [ 1, 3, 5, 7, 9 ]

    //Count backward with a for loop
        const backArray = []
        for(let i = 10; i > 0; i -= 2){
            backArray.push(i)
        }
        //console.log(backArray) //Output: [ 10, 8, 6, 4, 2 ]

    //Iterate through an array with a for loop
        //It's a common task in javascript
        const arr = ["Ravi", "Kumar", "Singh", "Chauhan"]
        for(let i = 0; i < arr.length; i++){
            //console.log(arr[i])
        } 
        /*Output: 
        Ravi
        Kumar
        Singh
        Chauhan */

        /*Remember that arrays have zero-based indexing, which means the last index of the array is length -1. 
        our condition for this loop is i < arr.length, which stops the loop when i is equal to length.
        in this case the last iteration is i === 4 i.e., when i becomes equal to arr.length -1 and outputs 6 to the console.
        Then i increases to 5 and the loop terminates because i < arr.length is false */

    //Nesting for loop
        //If you have a multi-dimensional array, you can use the same logic as the prior way point to loop through both the array and any sub arrays.
            const nestarr = [[1,2], [3,4], [5,6]]
            for(let i = 0; i < nestarr.length; i++){
                for(let j =0; j < nestarr[i].length; j++){
                    //console.log(nestarr[i][j])
                }
            }
            /*Output:
            1
            2
            3
            4
            5
            6 
            */

//do..while loop
    //It will first do one pass of the code inside the loop no matter what, and then continues to run the lop while the specified condition evaluates to true.
            const doWhileArr = []
            let k = 0
            do{
                doWhileArr.push(k)
                k++
            }
            while (k<5)
            //console.log(doWhileArr) //Output: [ 0, 1, 2, 3, 4 ] 

    //A normal while loop 
            const latestArray = []
            let l = 5;
            while(l <5){
                latestArray.push(l)
                l++;
            }
            console.log(latestArray) //Output: []

    //Point to take note with do.. while loop
    //It will print the first pass of the code without checking the condition
    //checks the condition after running the loop at once
            const thisArray = []
            let r = 7
            do{
                thisArray.push(r)
                r++
            }while(r < 5)
            console.log(thisArray)//Output: [7]
    
    