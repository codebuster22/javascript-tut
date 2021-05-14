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