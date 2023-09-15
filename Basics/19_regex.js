//Using the Test method
    //Regex are used in programming languages to match parts of strings.
    //You create patterns, to help you, do that matching.
    //If you want to find the word 'the' in the string 'the dog chased the cat', you could use the following regex"
        /the/
    //Notice that quote marks are not required within the regex. 
    //js has multiple ways to use regexes. 
    //One way to test a regex is using the .test() method. 
    //The .test() method takes the regex, applies it to a string(which is placed inside the paentheses), and returns 'true'
    //or 'false' if your pattern finds something or not. 
    
        let testStr = "Hello tobo"
        let testRegex = /code/
        testRegex.test(testStr)
    //returns true