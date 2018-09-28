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
    console.log("This is a Negative Number" + '\n');
}
else if(inputNumber==0)
{
    console.log("This number is zero" + '\n');
}
else if(inputNumber%2==0)
{
    console.log("This is a Even Number" + '\n');
}
else
{
    console.log("This is a Odd Number" + '\n');
}

//Insert input for 3 question
var inputNumber = readline.question("Input number for the 3 question: " + '\n');

//Question 2
console.log("Is the number " + inputNumber + " even or odd? if even is it divisible by 10(to known if its perfect)");

//calculate the answer from question 3
if (inputNumber%2 == 0)
{
    if(inputNumber%10 ==0)
    {
        console.log("This is perfect Number" + '\n')
    }
    else
    {
        console.log("This is Even Number" + '\n')
    }
}
else
{
    console.log("This is Odd Number" + '\n')
}
