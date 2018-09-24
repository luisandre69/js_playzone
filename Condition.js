//Using if - else

//We have 1 number and check if its Even or Odd number



//creating and assiging a value
var readline = require('readline-sync');

var inputNumber = readline.question("Input a positive number: " + '\n');

//Question 1
console.log("Is the number " + inputNumber + " Odd Or Even?");

//calculate the answer from question 1
if(inputNumber%2==0)
{
    console.log("This is a Even Number" + '\n');
}
else
{
    console.log("This is a Odd Number" + '\n');
}

//Insert input again
var inputNumber = readline.question("Input another number: " + '\n');

//Question 2
console.log("Is the number " + inputNumber + " negative, zero or if positive? Also if positive is odd or even?");

//calculate the answer from question 2
if(inputNumber < 0)
{
    console.log("This is a Negative Number");
}
else if(inputNumber==0)
{
    console.log("This number is zero");
}
else if(inputNumber%2==0)
{
    console.log("This is a Even Number");
}
else
{
    console.log("This is a Odd Number");
}

