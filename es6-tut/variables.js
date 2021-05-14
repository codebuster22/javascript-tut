// let keyword
let total = 0;
for(let i=0; i<10; i++){
    total += i;
}
console.log("Total:-",total); // 45
try{
    console.log(i); // Error
} catch (e){

}

// const Keyword
const sum = "Sum variable";
console.log("Sum:-",sum);

// const with arrays
const arr = [10,15,"20"];
// arr = [1,2,3,4] // will give error
arr.push(10);
arr[1] = 20;
Object.freeze(arr);
arr[4] = 20; // will be ignored
// arr.pop();  // pop() throws an error
console.log("Arr:-", arr);

// const with objects
const obj = {};
obj.name = "Mihir";
Object.freeze(obj);
obj.lastName= "Parmar"; // will be ignored
console.log(obj)