//Replace loops using recursion
    //Recursion is the concept that a function can be expressed in terms of itself. 
    //To help understand this, start by thinking about the following task:
    //Multiply the first n elements of an array to create the product of those elements.(using a for loop, you could do this)
        function multiplyfunc(arr, n){
            let productvalue = 1
            for(let i = 0; i < n; i++){
                productvalue *= arr[i]
            }
            return productvalue
        }

    //Practical example 
        arr = [2,2,2,2]

        function multiplyfunc1(arr, n){
            let productvalue = 1
            for(let i = 0; i < n; i++){
                productvalue *= arr[i]
            }
            return productvalue
        }
        let valueA = multiplyfunc1(arr,3)
        //console.log(valueA)//Output: 8 (because it's multiplying only first 3 elements of the array that is n)

    //However notice that multiplyfunct(arr,n) == multiplyfunct(arr,n-1) * arr[n-1]
    //That means you can rewrite multiply in terms of itself and never need to use a loop.
        function multiply(arr, n){
            if(n <= 0){
                return 1
            }else{
                return multiply(arr, n-1) * arr[n-1]
            }
        }
    //The recursive version of multiply breaks down like this.
    //In the base case, where n<=0, it returns 1. 
    //For large values of n, it calls itself, but with n-1.
    //At this point, all the functons can return and the original multiply returns the answer.
    
    /*NOTE
    Recursive functions must have a base case when they return without calling the function again(in this example, when n<=0), otherwise they can never finish ececuting.
    */

//Generate random fractions with javascript 
    //math.random function generates a random decimal number between 0(inclusive) and 1(exclusive). 
    //That means it can return a 0 but never return a 1.
    //Note: Like storing values with the assignment operator, all function calls, will be resolved befoe the return executes, 
    //so we can return the value of the math.random function.
        const randomNum = Math.random()
        //console.log(randomNum)

//Generate random whole numbers
    //use Math.random() to generate a random decimal
    //multiply it by 20
    //use Math.floor() to round that down it's nearest whole number

    /* Note: remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20.
    This technique will give us a whole number between 0 and 19    
    */
       const randomNumber = Math.floor(Math.random()*20)
        //console.log(randomNumber)


//Generate random whole numbers with a range
        //Math.floor(Math.random() * (max - min + 1)) + min 
        const wholeNumInRange = Math.floor( Math.random() * (50 - 10 + 1)) + 10
        console.log(wholeNumInRange)