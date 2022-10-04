require('dotenv').config()
const app = require("./routes");


app.listen(process.env.PORT, ()=> {
    console.log("app listen on port ", process.env.PORT);
})
