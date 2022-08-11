const prompt = require('prompt-sync')();
const fs = require('fs');


function getData() {
    let n = prompt('Namat ro Begu: ');
    let username = prompt("Username: ");
    let password = prompt("Password: ");
    let age = prompt("age: ");
    
    const data = `username: ${username},
    password: ${password},
    age: ${age}
    `
    if(!fs.existsSync("user/")){
        fs.mkdir("user/", (err) => {
            if(err) {
                console.log(err);
                return
            }
            console.log("directory sakhte shod!");
        })
    }
    
    fs.writeFile(`user/${n}.txt`, data, (err) => {
        if(err) {
            console.log(err);
            return
        }
        console.log("copy shod");
    })
}
const name = "Ashkan"

module.exports = {
    getData,
    name
}