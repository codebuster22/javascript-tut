/*
const caller = (a,b, print) => {
    const result = a + b;
    print(result);
}

const p = (message)=>console.log(message);

caller(10,20, p );
*/

const doSomething = (action, data, method) => {
    console.log(`Performing ${action}...`);
    method(data);
}

doSomething('Multiply', [10,50], multiply);
doSomething('Division', [10,2], division);
doSomething('Addition', [20,30], addition);
doSomething('Subtraction', [90,60], subtraction);