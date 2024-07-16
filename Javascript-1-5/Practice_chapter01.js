//Create a variable of type string and try to add a number to it

let str1 = "Hello"
const str2 = 20        //let can also be used in place of const
console.log(str1 + str2)


//Find the data type of a variable
console.log(typeof str2)
  

//Create a const object and initialize it then try to hold a number in it
const a = {
    name: "Injal", 
    section: 'A',
    isPrincipal: false
}
//a = 45    => cannot hold the number in the const object
console.log(a)


//Try to add a new key in the const object a. Were you able to do it?
a["name"] = "Injal_Acharya"
a['number'] = "333"
console.log(a)


//Create a word meaning dictionary of 5 words
const dictionary = {
    appriciate : "recognize the full worth of",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work",
    stunning: "very georgeous",
    excellent: "very good"
}
console.log(dictionary.yakka)
console.log(dictionary)