/*

We are going to take 1 input (marks)

if marks is less than 0 or more than 100 its invalid marks
if marks are between 0-30. you are failed
if marks are between 31-60, you hare passed
if marks are between 61-100, pass with honors

*/


var readline = require('readline-sync');

var marks = readline.question("Whats your mark?: " + '\n');

if (marks < 0 || marks > 100) {
    console.log("This is Invalid Marks");
}
else if (marks >= 0 && marks <= 30) {
    console.log("Sorry, you failed");
}
else if (marks >= 31 && marks <= 60) {
    console.log("Good, you passed");
}
else {
    console.log("Well Done! You passed with Honors");
}
