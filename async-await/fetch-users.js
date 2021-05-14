const fetch = require('node-fetch');
const url = "https://jsonplaceholder.typicode.com/users";

const unfetch = new Promise((resolve, reject)=>{

});

const fetchUsers = (url) => {
    let fetchedData;
     fetch(url).then(data=>data.json()).then(
         data=>{
            fetchedData = data;
     });
    setTimeout(
        ()=>console.log(fetchedData.map(
            element => (element.email)
        )),
        1000
    );
}

const asyncUsers = async (url) => {
    let fetchedUsers;
    const data   = await fetch(url);
    fetchedUsers = await data.json();
    console.log(fetchedUsers.map(
        element => (element.email)
    ));
};

asyncUsers(url);
// fetchUsers(url);

