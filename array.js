//cover array

var arr1 = ["Testing","Word",11];

//All Values from an array
console.log(arr1);

//Dispaly value of any specific index (ex returns "world")
console.log(arr1[1]);

//Find number of items stored into array
console.log(arr1.length);

//Update value in the array (ex replace "Testing" for "Test")
arr1[0]="Test";
console.log(arr1[0]);

//add items on array
//display length of array initially
console.log(arr1.length);
//Add a new member to array
arr1.push("www.luisabreu.co.uk");

//return arr lengh updated and the full array
console.log(arr1.length);
console.log(arr1);


//looping through an array

var len = arr1.length

for(i=0;i<len;i++)
{
    console.log(arr1[i]);
}