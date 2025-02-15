/*console.log("Myself Satyam Gavane");
var b=30
{
b=40
var a=40
}
console.log(a,b)*/

/* 1.Variable can be redeclared but let cannot
 2.let has block scope
 3.Variable have global scope and functional scope
 4.prefer not to use var due to issue of block scope and functional scope
 5.const have block scope
 */
 function f() {

    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();

// A cannot be accessible
// outside of function
console.log(a);