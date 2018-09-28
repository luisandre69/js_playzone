/*
break - come out of the loop conditionally
display table : but out from loop and don't display rest value if we got 50 in re
*/

var readinput = require('readline-sync');
var bnumber = readinput.question("Insert a number?" + '\n');

for(i=1;i<=10;i++)
{
    if(bnumber*i ==50)
    {
        break;
    }
    else
    {
        console.log(bnumber + "*" + i + "=" + bnumber*i)
    }
}