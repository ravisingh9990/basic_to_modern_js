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
        let testRegex = /tobo/ //case sensitive
        testRegex.test(testStr)//Output: true


//Match literal strings

        let testStrn = "Hello! my name is Naman"
        let testregex = /Naman/ //case sensitive
        let result =  testregex.test(testStrn)
        console.log(result) //Output: true


//Match a literal string with different possibilities

    //Using regexes like /tobo/, you can look for the pattern tobo in another string. 
    //This is powerful to search single strings, but it's limited to only one pattern. 
    //You can search for multiple patterns using the 'altercation' or 'OR' operator: '|'
    //This operator matches patterns either before or after it.
    //If you want to match the strings 'yes' or 'no', the regex you want is /yes | no/
    //You can also search for more than just two patterns. 
    //You can do this by adding more patterns with more 'OR' operators separating them, 
    //Like /yes | no | maybe/


//Ignore case while matching (upper or lower case)

    //Using 'flags'
    //There are many other flags
    //'i', 'flag' is used to match both cases uper or lower case

        // /ignorecase/i

    //This regex can match the strings 'ignorecase', 'igNoreCase', and 'IgnoreCase'.


//Exact matches

    //Using the '.match()' method
        let check = "Hello, Shaktiman".match(/Hello/) //Output: Hello
        //console.log(check)

        let ourStr = "Regular Expressions"
        let ourRegEx = /Expressions/
        let myCheck = ourStr.match(ourRegEx) //Output: expressions
        console.log(myCheck)

    /*
    The .match sytax is the "opposite" of the .test method
    */
        //'string'.match(/regex/)
        // /regex/.test('string') 
    
    //Description. The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.



//Find more than the first match

    //To extract or serach a pattern once. 
        let tstStr = "Repeat, Repeat, Repeat"
        let tstRegex = /Repeat/
        let res = tstStr.match(tstRegex) 
        console.log(res)//Output: Repeat

    //Global search flag: g
    //To extract or search for a pattern more than once

        let repeatRegex = /Repeat/g
        let myResult = tstStr.match(repeatRegex)
        console.log(myResult)//Output: [ 'Repeat', 'Repeat', 'Repeat' ]


//Match anything with wildcard period

    //When you don't know the exact character to match, use '.' (dot) or period (wildcard character)
    //The wildcard character will match 'any one character'.

    //For matching hug, huh, hut, and hum, you can use the regex /hu./ to match all 4 words.

        let humStr = "I'll hum a song"
        let hugStr = "Bear hug"
        let huRegex = /hu./
        let res1 = huRegex.test(humStr)
        let res2 = huRegex.test(hugStr)

        console.log(res1)//Output: true
        console.log(res2)//Output: true


//Match single character with multiple possibilities
    // /literal/ finds exact matches and wildcard character(.) matches everything.
    //You can search for a literal pattern witrh some flexibility with character classes. 
    //Character classes allow you to define a group of characters you widh to match by placing them inside square ([and]) brackets.

    //For matching the bag, big, and bug but not the bog. Create, /b[aiu]g/g
    //The [aiu] is the character class that will only match the characters a, i, or u. 
        let bigStr = "big"
        let bagStr = "bag"
        let bugStr = "bug"
        let bogStr = "bog"

        let bgRegex = /b[aiu]g/

      let big =  bigStr.match(bgRegex)
      let bag = bagStr.match(bgRegex)
      let bug =  bugStr.match(bgRegex)
      let bog =  bogStr.match(bgRegex)

      console.log(big)//Output: big
      console.log(bag)//Output: bag
      console.log(bug)//Output: bug
      console.log(bog)//Output: null //Because it's not matching


//Match letters of the alphabet
    //Inside a character set, you can define a range of characters to match using a hyphen character
    //To match lowercase letters 'a' through 'e' you would use [a-e]
        
        let catStr = "cat"
        let batStr = "bat"
        let matStr = "mat"

        let btRegex = /[a-e]at/

        let cat = catStr.match(btRegex)
        let bat = batStr.match(btRegex)
        let mat = matStr.match(btRegex)

        console.log(cat) //Output: cat
        console.log(bat) //Output: bat
        console.log(mat) //Output: null


//Match numbers and letters of the alphabet

    //(-) Hyphen can also be used to match a range of numbers
        let jennyStr = "jenny8675309"
        let myReg = /[a-z 0-9]ig/

        let myRes = jennyStr.match(myReg)
        console.log(myRes)//Output: null


//Match single characters not specified 

    //Negate character sets : A set of characters that you do not want to match
    //To create a negated character set, you place a caret character(^) after the opening bracket and before the 
    //characters you do not want to match. 
    // /[^aeiou]/gi matches all characters that are not a vowel. 
    
    //Note that characters like, ., !, [, @, / and white space are matched - the negated vowel character set only 
    //excludes the vowel characters.
