// User Database
// Store user Data in object
// Data Points to store
// 1) full name
// 2) City
// 3) Birth date
// 4) Skills:
//      a) codingLang - Coding Languages array
//      b) softSkills - Soft skills array
//      c) languages - array

// Functions
// 1) add user
// 2) remove user
// 3) update user data
// 4) getUser
// 5) getUserNCondingLang 
        //-  fetch first coding language of a user.

const input = require('prompt-sync')();
const print = (message) => console.log(message);

const arrInput = (type) => {
    const totalInputs = input(`Number of ${type} you know:- `);
    const result = []
    for( let i = 0; i < totalInputs; i++ ){
        result.push( input(`Enter ${i+1}th Input:- `) );
    }
    return result;
}

const birthdayInput = () => {
    print("Enter your Birthdate:-");
    const date = input("Date:- ");
    const month = input("Month:- ");
    const year = input("Year:- ");
    return `${date}/${month}/${year}`;
}

const userData = {

    length: 0,
    addUser: () => {
        const name = input("Enter your full name:- ");
        const city = input("Enter your city:- ");
        const birthDate = birthdayInput();
        const skills = {
            codingLang: arrInput("Coding Languages"),
            softSkills: arrInput("Soft Skills"),
            languages: arrInput("Languages"),
        };
        const user = {name, city, birthDate, skills};
        userData[userData.length] = user;
        userData.length++;
    },
    deleteUser: () => {
        const index = input("Enter user index to delete:- ")
        print("Deleting user:- ", userData[index]);
        delete userData[index];
        userData.length--;
    },
    updateUserCity: () => {
        const index = input("Enter user index to update:- ");
        const newCity = input("Enter new city:- ");
        userData[index].city = newCity;
        print("Updated");
    },
    getUser: () => {
        const index = input("Enter user index:- ");
        print(userData[index]);
    },
    getUserCondingLang: () => {
        const index = input("Enter user index:- ");
        const { skills: { codingLang }} = userData[index];
        print(codingLang[0]);
    },
};

const wait = () => input("Press Enter to move ahead.");

const main = () => {
    let running = true;
    while(running){
        print("Welcome to user database");
        print("Select an option:-");
        print("1) Add User");
        print("2) Remove User");
        print("3) Update User City");
        print("4) Get User");
        print("5) Get first coding language");
        print("6) Total users");
        print("7) Print database");
        print("8) Exit");
        const option = input("Enter your option:- ");
        switch(option){
            case '1':
                userData.addUser();
                wait();
                break;
            case '2':
                userData.deleteUser();
                wait();
                break;
            case '3':
                userData.updateUserCity();
                wait();
                break;
            case '4':
                userData.getUser();
                wait();
                break;
            case '5':
                userData.getUserCondingLang();
                wait();
                break;
            case '6':
                print(userData.length);
                wait();
                break;
            case '7':
                print(userData);
                wait();
                break;
            case '8':
                running = false;
                break;
        }
    }
}

main();