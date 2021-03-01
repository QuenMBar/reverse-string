// // 1. Loop backwards through the string and append each character to the new string
// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // 2. Split the word into an array and reverse the array
// function reverseString(str) {
//     let strArray = str.split("");
//     strArray.reverse();
//     return strArray.join("");
// }

// RECURSIVE!!!!!!!!!!!!!
function reverseString(str) {
    if (str.length === 0) {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 'ih'");
    console.log("=>", reverseString("hi"));

    console.log("");

    console.log("Expecting: 'ybabtac'");
    console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * Problem:
 * Take a string and return a string with the reversed order
 */
