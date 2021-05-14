// destructuring in Objects
/*
const obj = {
    firstName: "Mihir",
    lastName: "Parmar",
    age: "22",
    city: "Pune",
    skills: {
        programming: ["Js", "Solidity"],
        lib: ["React"]
    }
}

const greetUser = (user) => {
    const {firstName: fName, lastName: lName, age: a, skills: {lib: library}} = user;
    console.log(`Welcome ${fName} ${lName}`);
    console.log(`Hello, My name is ${fName}. I am ${a} years old.`)
    console.log(library)
}

greetUser(obj);
*/


// destructuring arrays
/*
const arr = [10,20,60,70,90];

const getFirstThreeNumber = (arr) => {
    const [first, , third , ...remaining] = arr;
    console.log(first, third, remaining);
}

getFirstThreeNumber(arr);
*/

const area = "Hinjewadi";
const city = "Pune";
const state = "MH";

const address = { area, city, state }

// console.log(address);

// "key" - "value"
let property;

for (property in address) {
    console.log( `${property} - ${address[property]}` );
}