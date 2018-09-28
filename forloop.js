//For Loop with increment value

//Exercise 1 - Print a table of any nubmber
var readline = require('readline-sync');

var number = readline.question("Select the number to create the table of the number?: " + '\n');

for(i=1;i<=10;i++)
{
    console.log(number + "*" + i + "=" + number*i)
}

//Exercise 2 - Print a table of any number in the reverse order

var revnumber = readline.question("Select the number to create a reverse table of numbers?" + '\n');

for (i=10;i>=1;i--)
{
    console.log(revnumber + "*" + i + "=" + revnumber*i)
}