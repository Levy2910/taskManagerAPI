const express = require("express");
const app = express();
const router = require("./routes/routes.js")
const connectDB = require('./db/connect')
require('dotenv').config();


app.use(express.json());

app.use("/api/v1/tasks", router)




const port = 3000;

const start = async function(){
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`hi, listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }

}

start()



