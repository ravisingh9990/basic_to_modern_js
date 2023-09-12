//Recursion
    /*This recursive function returns an array containing the numbers 1 through n. 
    this function will need to accept an argument n, representing the final number. 
    then it will need to call itself with progressively smaller values of n until it reaches 1.
    */
        function countup(n){
            if(n < 1){
                return []
            }else {
                const countArray = countup(n - 1)
                countArray.push(n)
                return countArray
            }
        }
        //console.log(countup(5)) //Output: [ 1, 2, 3, 4, 5 ]
    //At first, this seems counterintutive since the value of n decreases, but the values in the final array are increasing.
    //This happens because the push happens last, after the recursive call has returned.
    //At the Point where n is pushed into the array, countup(n -1) has already been evaluated and returned [1,2,3,4,..... n-1]

//Compare scopes of the var and let keywords
    //When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
    /*Let keyword behaves similarly, but with some extra features. 
    When you declare a variable with the let keyword inside block, statement, or expression, 
    it's scope is limited to that block, statement, or expression. */
        var numArray = []
        for(var i =0; i <3; i++){
            numArray.push(i)
        }
        //console.log(numArray)//Output: [ 0, 1, 2 ]
        //console.log(i)//Output: 3 (because the global variable i is updated with i++)

    //this code will return the same result
        var numNewArray = []
        var j
        for(j = 0; j < 3; j++ ){
            numNewArray.push(j)
        }
        //console.log(numNewArray)//Output: [ 0, 1, 2 ]
        //console.log(j)//Output: 3
    //With the var keyword, i is declared globally. so when i++ is executed, it updates the global variable.

    /*NOTE:
    This behaviour will cause problems if you were to create a function and store it for later use inside a for loop 
    that uses the variable i. This is because the stored function, will always refer to the value of the updated 
    global i variable.
    */
    //using var
        var printNumTwo
        for(var k = 0; k<5; k++){
            if(k == 3){
                printNumTwo = function(){
                    return k
                }
            }
        } 
        //console.log(printNumTwo())//Output: 5

    //using let
        let printNumberTwo
        for(let i = 0; i<5; i++){
            if(i === 2){
                printNumberTwo = function(){
                    return i
                }
            }
        }
        console.log(printNumberTwo())//Output: 2
        console.log(i)//Output: 3