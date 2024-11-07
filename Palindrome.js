// create a function to test to see if a word is a palindrome

function checkPal(wordTest){
    // remove all of the spacesin the string that was passsed in
    var cleanWord = wordTest.replace(/\s/g, "").toLowerCase();

    //alternatively -
    // var cleanWord = wordTest.replace(/\s/g, "");
    // cleanword = cleanword.toLowerCase()

    //take our cleaned word with no spaces and all lowercase and reverse it
    //cleanword = "radar"
    var reverseWord = cleanWord.split("").reverse().join("");
 
//Alternative -
//  reverseWord = cleanWord.split("");
// reverseWord.reverse();
// reverseWord = reverseWord.join("");

//if the cleaned and reverse word are the same, the function returns true
//if they are different. the function returns false
return cleanWord == reverseWord;
}

console.log("radar=" + checkPal ("radar"));
console.log("tag=" + checkPal ("tag"));
console.log("A man a plan a canal panama=" + checkPal ("A man a plan a canal panama"));

// bContinue will track if the user wants to keep entering words
var bContinue = true;

//loop to keep running the code for as long as the user wants
do{
    //get the word from the user
    var userInput = prompt("Enter a word to test if it is a palindrome")

    //test the variable that the user entered
    var isPal = checkPal(userInput);

    //show the user a messenge based on the true/false value returned from the function
    //if isPal is trrue, the if statement will run
    if (isPal){ // the same 
        alert(userInput + " is a palindrome")
    }
    else{
        alert(userInput + " is not a palindrome")
    }

    // ask the user if they want to continue testing palindrones
    var again = prompt("Do you want to continue? (y/n)")

    //test to see if they entered n
    if (again.toLowerCase() == "n"){
        bContinue = false; //change bContinue to false so we can exit out of the loop
    }

}while(bContinue); //while bContinue is true, keep running the loop

/*Date:
11 - 7 - 2024*/