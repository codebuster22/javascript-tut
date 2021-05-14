const greetNodes = (userType, firstName, lastName="") => {
    switch (userType) {
        case 1:  return `Thank You ${firstName} ${lastName} for your Validation.`;
        case 2:  return `Thank You ${firstName} ${lastName} for keeping the network secure.`;
        case 3:  return `Thank You ${firstName} ${
            lastName==="" ?
                ""
                :
                `${lastName} `
            }for using the platform.`;
        default: return `Welcome ${firstName} ${lastName}`;
    };
};

console.log( greetNodes(1,"Mihir","Parmar") );
console.log( greetNodes(2,"Shubham","Mistry") );
console.log( greetNodes(3,"Vitalik") );
console.log( greetNodes("Miner","Mihir","Parmar") );