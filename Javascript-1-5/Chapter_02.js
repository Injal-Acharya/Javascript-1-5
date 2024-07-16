//Operators and Expression

//Arithmetic operators
let a = 41
let b = 5
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("a++ = ", a++)
console.log("++a = ", ++a)
console.log("a-- = ", a--)
console.log("--a = ", --a)

//Assignment operators
let value1 = 6;         //semicolon(;) is optional, doesn't matter if written or not
let value2 = 6
let value3 = 6
let value4 = 6
let value5 = 6
let value6 = 6
let value7 = 6

value1 += 1
value2 -= 1
value3 *= 2
value4 /= 2
value5 **= 2
value6 %= 4
value7 = 10
console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)
console.log(value6)
console.log(value7)


//Comparison operators
const comp1 = 4
const comp2 = "4"
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 < comp2 is ", comp1 < comp2)


//Logical operators
const x = 7
const y = 8
console.log(x < y && x==y)
console.log(x<y || x==y)
console.log(!true)
console.log(!false)

//prompt and alert statements
const prompt = require('prompt-sync')();
let age = prompt("Hey, what's your age? : ")
console.log(typeof age)
//alert("This is an alert!!")

age = Number.parseInt(age)     //convertion of string to number
console.log(typeof age)

//Conditional expressions in JS
let ag = prompt("Enter the your age: ");
ag = Number.parseInt(ag);

if(ag<0) {
    console.log("This is an invalid age");
}
else if(ag<9) {
    console.log("You are a kid and you cannot even think of driving");
}
else if(ag>9 && ag<18) {
    console.log("You are below 18 so, you cannot dive");
}
else {
    console.log("You are eligible for driving");
}

//switch statements
const fruit = prompt("Enter your favourite fruit: ");
switch (fruit)
{
    case "Mango":
        {
            console.log("You like mango");
            break;
        }
    case "Banana":
        {
            console.log("You like banana");
            break;
        }
    case "Apple":
        {
            console.log("You like apple");
            break;
        }
    default:
        console.log("Invalid input");
}

//Ternary operator
let agg = prompt("Enter your age: ");
let result = ((agg >= 18)? 'You can drive': 'You cannot drive');   // (condition)? 'Expression for true' : 'Expression for false' ;
console.log(result);


//Chapter-02 Practice Questions

//Problem-1 : To find whether the age lies between 10 and 20
const Age = prompt("Enter your age: ");
if (age>10 && age<20)
{
    console.log("Your age is between 10 and 20");
}

//Problem-2 : To find whether a number is divisible by 2 and 3
const numb1 = prompt("Enter the number: ");
if (numb1 % 2 == 0 && numb1 % 3 == 0)
{
    console.log(numb1 +" is divisible by 2 and 3");
}
else {
    console.log("The number is not divisible by 2 or 3 or both");
}

//Problem-3 : To find whether a number is divisible by either 2 or 3
const numb2 = prompt("Enter the number: ");
if(numb2 % 2 == 0 || numb2 % 3 == 0)
{
    console.log(numb2 + " is divisible by 2 or 3");
}
else {
    console.log("The number is not divisible by 2 and 3");
}

//Problem-4 : To print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator
const Ag = prompt("Enter your age: ");
console.log((Ag > 18)? "You can Drive" : "You cannot Drive");
