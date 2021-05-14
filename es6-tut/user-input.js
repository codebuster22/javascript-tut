const prompt_sync = require('prompt-sync');
const input = prompt_sync();
const print = (message) => console.log(message);


const name = input("Enter your Name:- ");
print(name);