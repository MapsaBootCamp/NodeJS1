const mongoose = require("mongoose")

const MongoURL = "mongodb://localhost:27017/hello_mongo"


exports.dbConnect = () => {
    try {
        mongoose.connect(MongoURL, { useNewUrlParser: true});
        console.log("Connected to DB !!");
      } catch (e) {
        console.log(e);
        throw e;
      }
}

