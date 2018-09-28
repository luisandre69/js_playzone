//While loop with increment value

//Exercise 1 - Print a table of any nubmber
var readline = require('readline-sync');

var number = readline.question("Select the number to create the table of the number?: " + '\n');

var i = 1;
while(i<=10)
{
    console.log(number + "*" + i + "=" + number*i)
    i++;
}

//While loop with decrement value
//Exercise 2 - Print a table of any number in the reverse order

var revnumber = readline.question("Select the number to create a reverse table of numbers?" + '\n');

var i = 10;
while(i>=1)
{
    console.log(revnumber + "*" + i + "=" + revnumber*i)
    i--
}