function greet(name) {
    console.log("Welcome "+name);
};

const greet2 = function (name) {
    console.log("Welcome to "+name);
};

// arrow function type 1
const greet3 = (name="Anonymous") => {
    console.log("This is extreme right, "+name);
};

//arrow function type 2
const sum = (a,b) => a+b;

// rest parameter - ...args
const sumAll = (...args) => console.log(args);


greet("Mihir");
greet2("Blockchain");
greet3("Shubham");
greet3();
console.log(sum(10,20));
console.log(sumAll(10,20,30,40,50,980,10,20));