//This is String Handling

var mystr = "This is Testing World Testing"
var mystr1 = "testing world testing world!"
//Find out the length of a String
var res=mystr.length
console.log(res)

//My SubString exist in main String and locate its index (if return '-1' means that it doesnt exist)
console.log("Index of Testing -- " + mystr.indexOf("Testing"))

//Find out the last index of string 
console.log("Last Index of Testing -- " + mystr.lastIndexOf("Testing"))

//Uppercase
console.log(mystr.toUpperCase());

//lowercase
console.log(mystr.toLowerCase());

//concatinate 2 strings
console.log(mystr.concat(" ").concat(mystr1));
console.log(mystr + " " + mystr1);

mystr2 = mystr + " " + mystr1;
console.log(mystr2)

//Character in a particular place
console.log(mystr2.charAt(6));

//reverse string

//return lengh of string
var l = mystr2.length;
//var to save the new string reverted
var mystrfinal="";
//j=l-1 because char starts on 0 while the lenght will return all the numbers
for(j=l-1;j>=0;j--)
{
    //saves letter by letter in the empty var
    mystrfinal =mystrfinal+mystr2.charAt(j);
}
//return the reverse string
console.log(mystrfinal);

var mystr1="Testing World"
//Substring from given string
console.log (mystr1.substring(3,8));

//replace words in the string
console.log(mystr1.replace("Testing","Hello"))


//compare 2 string if they are the same regardless of upper/lower case
var mystr1="Testing WorlD"
var mystr2="Testing World"

if (mystr1.toUpperCase==mystr2.toUpperCase)
{
    console.log("The 2 strings are the same")
}
else
{
    console.log("The 2 strings are not the same")
}