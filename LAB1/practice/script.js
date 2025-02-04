// Fundamental data types

/*
Multi
line
comment
*/

/*
integer
string
float
boolean
*/

// Typeof
alert(typeof 6.4);

// Let vs Const vs Var

var x = 15;

let age = 20;
age = 10;

const z = "Hey there";

// Reassignment (no let)

age = 15;
age = 25;
age = 35;

alert(age);

// Essential Operations

let sum = age + 3;
console.log(sum);

sum = sum + 3;
sum += 3;
console.log(sum);
sum = sum - 4;
sum -= 4;
console.log(sum);
sum = sum * 2;
sum *= 2;
console.log(sum);
sum = sum / 5;
sum /= 5;
console.log(sum);

// Concatenation v. templates
// User Input
let friend = prompt("Who is your best friend?")
//Method 1
console.log("Your best friend is " + friend);
//Method 2
console.log("Your best friend is ", friend);
//Method 3
console.log("Your best friend is ${friend}");

// Additional operations
// equal
console.log(34 == 72)
// less than
console.log(34 < 72);
// greater than
console.log(34 > 72);
// less than or equal
console.log(34 <= 72);
// greater than or equal
console.log(34 >= 72);
// not equal
console.log(34 != 72);

console.log("The answer is:","23" == 23);

// String methods

const name1 = "avery"
//uppercase
console.log(name1.toUpperCase)
//lowercase
console.log(name1.toLowerCase)
//locale uppercase
console.log(name1.toLocaleUpperCase)
//locale lowercase
console.log(name1.toLocaleLowerCase)

//Math methods

console.log(Math.random() * 100);

console.log(Math.floor(9.3));

// Comparison operators - true or false?


// Conditional statements;



// Functions

// Returns half the number if it can be halved; otherwise returns false


// Functions can also be written as arrows. Body of function doesn't change, just the signature.

