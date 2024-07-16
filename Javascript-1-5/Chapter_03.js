//Loops and Functions

//For loop

const prompt = require('prompt-sync') ();

//Program to add first n natural numbers 
let sum = 0;
let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);
for (let i = 0; i<= n; i++)
{
    sum += (i);
}
console.log("The sum of first " + n + " natural numbers is " + sum);


//For in loop

let obj1 = {
    injal: 92,
    kumar: 90, 
    anwit: 88,
    anisha: 85,
    aarju: 91
}
for (let marks in obj1)
{
    console.log("Marks of " + marks + " is " + obj1[marks]);
}

//for of loop

for (let a of "Injal")
{
    console.log(a);
}

//while loop
let numb1 = prompt("Enter the value of n: ");
numb1 = Number.parseInt(numb1);

let i = 0;
while (i<numb1)
{
    console.log(i);
    i++;
}

//do while loop
do
{
    console.log(i);
    i++;
}while(i<numb1);


//Functions
//Type-1 function
function Sum(a, b) 
{
    return (a+b)/2;
}

let x = 2;
let y = 3;
console.log("The average of the numbers is " + Sum(x, y));

//Type-2 function
function printhello()
{
    console.log("Hello there, how are you doing");
}

printhello();

//Type-3 function(Arrow function)
const summ = (x, y) => {
    let z = (x + y)/2;
    return z;
}

console.log("The average of is " + summ(2, 3));


//Chapter-3 Practice Questions

//Problem-1 : To print marks of student in an object using for loop

let Marks = {
    Injal : 93, 
    Kumar : 90,
    Anwit : 89
}
for (let i=0; i<Object.keys(Marks).length; i++)
{
    console.log("The marks of " + Object.keys(Marks)[i] + " is " + Marks[Object.keys(Marks)[i]]);
}

//Problem-2 : Same as Problem-1 but using for in loop

for (let keys in Marks) 
{
    console.log("The marks of " + keys + " is " + Marks[keys]);
}

//Problem-3 : Write a program to print "Try again" until the user enters the correct number

let cnumb = 3;
let j;
j = prompt("Enter a number: ");
do
{
    if (j == cnumb)
        break;
    j = prompt("Try again ");
}while (j != cnumb);
console.log("Congratulations! " + j + " is the correct number");

//Problem-4 : Write a program to find the mean of five numbers using function
const mean = (a, b, c, d, e) => {
    return (a+b+c+d+e)/5;
}

console.log("The mean is " + mean(1,2,3,4,5));
