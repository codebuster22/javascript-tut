/*
class Blockchain {
    property1 = "Welcome to the class";

    constructor (owner) {
        this.owner = owner;
    }

    method = (num) => {
        try {
            return num.block.chain;
        } catch (error) {
            console.log("Wrong input");
            return -1;
        }
    };

    fetchApi = () => {
        try{
            fetch("https://jsonplaceholder.typicode.com/users");
        } catch (error) {
            console.log(error)
        }
    }
};

const blockInstance = new Blockchain("Mihir");

console.log(blockInstance.property1);
console.log(blockInstance.method("Blockchain"));
console.log(blockInstance.owner);
blockInstance.fetchApi();
*/

/*
const Animal = {
    eat: ()=>"nom nom nom"
};

function Bird () {
    this.name = "Kingfisher";
    this.fly = () => "Wooosssshhhh";
}

Bird.prototype = Animal;
Bird.prototype.constructor = Bird;

const bird = {
    name: "Kingfisher",
    fly: ()=> "wooshhhh!"
};

const dog = {
    name: "Tommy",
    bark: () => "Woof Woof!"
};

*/

/*
class Animal {
    name = "Animal";
    eat = () => "nom nom nom";
}

class Bird extends Animal {
    name = "Kingfisher";
    fly = () => "Wooossshhh";
}

const kf = new Bird();

console.log(kf.name);
console.log(kf.fly());
console.log(kf.eat());
console.log(kf);
*/