const db = require("./config/database")

async function db_get(query, param){
    return new Promise(function(resolve,reject){
        db.get(query, param, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}


async function getUser(id){
    const result = [null, null]
    try{
        result[1] = await db_get("SELECT * FROM users WHERE active=1 AND user_id=?", id)
    }catch(err){
        result[0] = err
    }
    return result;
}

module.exports = getUser