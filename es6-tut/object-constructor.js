function Human(name) {
    this.name = name;
    this.species = 'Human';
}

const alice = new Human('Alice');
const bob   = new Human('Bob');
const mihir = new Human('Mihir');

console.log(alice.name);
console.log(alice.species);

const bambi = true;
console.log(bambi instanceof Human);
console.log(typeof bambi);