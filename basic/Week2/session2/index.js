const prompt = require('prompt-sync')();
const fs = require('fs');

fs.readFile("text.txt", "utf-8", (data, err) => { 
    if(err) {
        console.log(err);
        return
    }
    console.log(data);
 })