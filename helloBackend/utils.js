const db = require("./config/database")

async function dbGetObject(query, param){
    return new Promise(function(resolve, reject){
        db.get(query, param, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}


async function getUser(id){
    const result = [null, null]
    try{
        result[1] = await dbGetObject("SELECT * FROM users WHERE active=1 AND user_id=?", id)
    }catch(err){
        result[0] = err
    }
    return result;
}


function createTestUserOnTable(){
    testUsers = [["Ashkan", "1234"], ["Ebi", "4321"], ["Dariush", "5678"]]
    db.serialize(() => {
        db.run("begin transaction")

        for(const item of testUsers){
            db.run(`INSERT INTO users(username, password, active) VALUES (?, ?, ?)`, [...item, 1])
        }

        db.run("commit");
    })
    db.close()
}


module.exports = {
    getUser,
    createTestUserOnTable
}