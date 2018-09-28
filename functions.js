function hello()
{
    console.log("Hello Word!")
    console.log("This is a simple function without arguments or return values")
}

//calling hello function
//hello();
function sum()
{
    var a = 10;
    var b = 20;
    var c = a+b;
    console.log(c);
}

//call a simple sum function
//sum();

function advsum(a,b)
{
    var c = a+b;
    console.log(c);
}

//call a sum function with values
//advsum(5,10);

//to return sum value
function retsum(a,b)
{
    var c = a+b
    return c
}

//to multiply the values
function mul(a,b)
{
    var c = a*b
    console.log(c)
}

//is necessary to calculate (100+200)*30

//z saves the sum necessary after for the multiplication
//z=retsum(100,200)
//mul(z,30)

//execute in 1 single line without defining more variables
mul(retsum(100,200),30)
