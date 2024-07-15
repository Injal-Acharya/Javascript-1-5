//Strings

let name = "Injal";
console.log(name);
console.log(name.length);

let frn = 'Kumar';
console.log(frn);

//Template Literal
let sentence = `${frn} is a friend of ${name}`;
console.log(sentence);

//Escape sequence characters
let fruit = 'Appl\'e';
console.log(fruit);

//String properties and methods
let nam = "Injal";
console.log(nam.length);    //prints the length of the string in nam

console.log(nam.toUpperCase());    //prints the string in upper case letters

console.log(nam.toLowerCase());    //prints the string in lower case letters

console.log(nam.slice(2,4));     //prints the letters of the string from index 2 to 4 excluding 4th index

console.log(nam.slice(1));    //prints all the letters of the string from index 1 

console.log(nam.replace("In" , "An"));   //prints the string after replacing the the given letters

let nam2 = "Acharya";
console.log(nam.concat(" is my name and ", nam2 , " is my sirname" ));
console.log(nam + " " + nam2);     // + operator also concatenates the strings

let nam1 = "  Injal   ";
console.log(nam1.trim());     //removes the whitespaces from the string


console.log(nam[0]);
console.log(nam[1]);
console.log(nam[2]);
console.log(nam[3]);
console.log(nam[4]);

//Strings are immutable
nam[0] = "A";   // This can never be done i.e. we cannot change the letter of string because strings are immutable

console.log(nam);

//Practice Questions

//Problem-1 
let a = "Inj\"";        //escape sequence character is counted as a single character
console.log(a.length);
console.log("Inj\"".length);

//Problem-2 : Includes, startsWith and endsWith functions
let Sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox";

//includes
console.log(Sentence.includes(word));
console.log(`The word "${word}" ${Sentence.includes(word) ? " is ":" is not "} included in the sentence ` + Sentence);

//startsWith
const test = 'Work is Worship';  
console.log(test.startsWith('Work'));      //starts searching 'Work' from the 0th index
console.log(test.startsWith('Worship',8));     //starts searching 'Worship' from the 8th index
console.log(test.startsWith('work')); 

//endsWith
console.log(test.endsWith("Worship"));

//Problem-3 : Extract the amount out of the string
let string = `Please give him Rs. 1000`;
let amount = Number.parseInt(string.slice("Please give him Rs. ".length));
console.log(amount);

//Problem-4 : Try to change 4th letter of a string, were you able to do it
let String = "Helpp";
String[3]  = "N";
console.log(String);
//The string was not changed because strings are immutable
