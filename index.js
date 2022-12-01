const express = require("express")
const mongoose = require('mongoose')

const employRoute = require("./route/employee_route")
const userRoute = require("./route/user_route")

const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')        //allow .env to work


const app = express()
app.use(cors());
app.use(express.json())


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        console.log('DB connected');
    })
    .catch( (err) => {
        console.log('err');
    });


app.use("/api/employee", employRoute)
app.use("/api/user", userRoute)


app.get('/', (req, res) => {
    res.send("<h1>Assignment 2</h1> <br> <h2>Stu: Janine</h2>")
})



const SERVER_PORT = process.env.PORT || 8080

app.listen(SERVER_PORT, "0.0.0.0",() =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})