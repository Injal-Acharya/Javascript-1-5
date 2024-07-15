//Arrays
const prompt = require("prompt-sync")();


const marks = [90, 92, 88, 75, false, "Absent"];
marks[6]  = 79;      // Arrays are mutable i.e. it's values can be changed and new values can also be added in the array
console.log(marks);
console.log(marks[2]);
console.log(marks[7]); // will print undefined because there is no 7th index in the array
marks[7] = 69;
console.log(marks[7]);  // Now, it will print because value for 7th index has already been added in the array
console.log("The length of the marks array is " + marks.length);

//Printing above array using for loop
for(let i in marks)
{
    console.log(marks[i] + " ");
}

//Printing only the index of the array
for(let i in marks)
{
    console.log(i + " ");
}


//Array Methods

let num = [1, 2, 3, 4, 5];
console.log(typeof num);

//toString()
let b = num.toString()   //b is now string
console.log(b);
console.log(typeof b);

//join()
let c = num.join("-");
console.log(c);
console.log(typeof c);

//pop()
let r = num.pop();
console.log(num);
console.log(r);

//push()
let l = num.push(6);    //push returns the new array length 
console.log(num);
console.log(l);    //prints the new length of the array 

//shift()
let s = num.shift();   //removes the first element from the array
console.log(num);
console.log(s);     //prints the removed array since shift() returns the removed element

//unshift()
let u  = num.unshift(11);  //adds new element at the beginning of the array
console.log(num);
console.log(u);      //prints the new length of the array since unshift() returns the new length of the array 

//delete
delete num[1];      //delete the element at 1st index 
console.log(num);
//Note that delete not a function but it is an operator

//concate()
let num1 = [1, 3, 5, 7];
let num2 = [2, 4, 6, 8];
let num3 = [9, 10];
let finalArr = num3.concat(num1, num2);   //this method doesn't change original array so, the arrays have to be concatenated in a new array. Here, i.e. 'finalArr'
console.log(finalArr);         //any number of arrays can be concatenated

//splice()
const fruits = ["Banana", "Apple", "Orange", "Mango"];

//At position 2, remove 1 item, and add "Lemon" and "Kiwi"
let deletedValues = fruits.splice(2, 1, "Lemon", 'Kiwi');       //returns the deleted elements of the array
console.log(fruits);
console.log(deletedValues);         //prints the deleted elements of the array
console.log(typeof fruits);         //prints object
console.log(typeof deletedValues);  //prints object


//sort()
let numb = [31, 5, 1, 12, 17, 6];
numb.sort();        //sorts alphabetically, not through the numeric value
console.log(numb);

//For asscending order sorting
let compare1 = (a, b) => {
    return a-b;
}
numb.sort(compare1);        //sort funtion can also take argument
console.log(numb);

//For descending order sorting
let compare2 = (a, b) => {
    return b-a;
}
numb.sort(compare2);        //sort function taking an argument
console.log(numb);


//reverse()
let newArray = numb.reverse();         //reverses the array elements
console.log(numb);              //the original array is also changed
console.log(newArray);          //the array 'numb' is reversed and it's copy it passed to the array 'newArray'

//slice()
let sliceArr = numb.slice(1, 3);      //returns elements of the original array form 1st index to 2nd index i.e. excludes the 3rd index and puts in the new array sliceArr
console.log(numb);          //prints the original array i.e. the original array doesn't change
console.log(sliceArr);      //prints the elements which are taken from the original array


const PromptSync = require("prompt-sync");


//Array Loops

//classical js loop
let numArr = [1, 3, 5, 2, 4];
for(let i = 0; i< numArr.length ; i++)
{
    console.log(numArr[i]);
}

console.log(`\n`);

//forEach loop-1
numArr.forEach((element) => {
    console.log(element*element)
});

//forEach loop-2
numArr.forEach((element, index, array) => {
    array[index] = element*element;
    console.log(array[index]);
});                           //this forEach loop can be used in any way

//Array.from
let name = "INJAL";
let arr = Array.from(name);
console.log(arr);

/*
let collection = {
    1: "Injal", 
    2: "Kumar",
    3: "Anwit", 
    4: "Bibek"
}
let newArrayy = Array.from(collection);
console.log(newArrayy);         --->It shows that objects cannot be converted to an array using Array.from function
*/

//for...of loop
for(let i of numArr) {          //here, 'i' takes the values not the index just like in object
    console.log(i);
}

//for...in loop
for(let i in numArr) {
    console.log(i + " : " + numArr[i]);     //here, i acts as index of the array elements just like it acts as keys in object
}

//Array map Method
let numbArr = [1, 3, 5, 2, 4];
let newA = numbArr.map((element) => {
    return element + 1;
});
console.log(newA);          //map helps to create a new array from the given array

//Also,
let newB = numbArr.map((value, index, array) => {
    console.log(index, value, array);
    return value + 2;
    
});
console.log(newB);

//Array filter Method
let newC = numbArr.filter((element) => {
    if (element % 2 != 0)
        return element;         //returns only the odd elements in the new array 'newC'
});
console.log(newC);

//Array reduce Method
myFunc = (a, b) => {
    return a + b;
}
let reducedArr = numbArr.reduce(myFunc);
console.log(reducedArr);        //this method returns a single value through peforming operations on array elements
                                //doesn't affect the original function

        
//Practice Questions

//Problem-1: Create an array whose elements are taken from user

let Arr1 = [];
let len = prompt("Enter the length of the array: ");
for(let i=0; i<len; i++)
{
    Arr1[i] = Number.parseInt(prompt("Enter the number for array: "));
};
console.log(Arr1);


//Problem-2: Keep adding numbers in an array until 0 is added

let Arr2 =[];
let Num;
do {
    Num = prompt("Enter a number: ");
    Arr2.push(Number.parseInt(Num));
}while(Num != 0);
console.log(Arr2);

//Problem-3 : Filter for the numbers divisible by 10 from a given array

let Arr3 = [5, 10, 20, 25, 40, 45, 50];
let Arr4 = Arr3.filter((element) => {
    return (element % 10 ==0);
});
console.log(Arr4);

//Problem-4 : Create an array of square of given array of numbers
let Arr5 = [1, 2, 3, 4, 5];
let ArrSquared = Arr5.map((element) => {
    return element*element
});
console.log(ArrSquared);

//Problem-5 : Use reduce to calculate factorial of given number form an array of first n natural numbers, n beging the number whose factorial needs to be calculated
let n = Number.parseInt(prompt("Enter the no. whose factorial is to be calculated: "));
const Arr6 = [];
for(let i = 0; i<n; i++)
{
    Arr6.push(i+1);
}
let Factorial = Arr6.reduce((value1, value2) => {
    return value1 * value2;
})
console.log("Factorial of " + n + " is " + Factorial);
