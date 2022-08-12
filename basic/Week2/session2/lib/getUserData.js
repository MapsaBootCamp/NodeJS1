// const prompt = require('prompt-sync')();
import promptSync from 'prompt-sync';
import * as fs from "fs"

const prompt = promptSync()

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
export const name = "Ashkan"

export default getData;

// module.exports = {
//     getData,
//     name
// }