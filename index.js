const express = require("express")
const cors = require('cors')
require('dotenv/config')        //allow .env to work


const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.DATABASE_URL)
const database = client.db('comp3123_assignment2')
const employees = database.collection('employee')

client.connect()
console.log('connected to mongodb');

const app = express()
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => res.json('Here is get router'))

app.post('/', async(req, res) => {
    await employees.insertOne({
        first_name: 'Strawberry',
        last_name: "Milkshake",
        email: "sberry@georgebrow.ca"
    })
    res.json('Item was added')
})


const SERVER_PORT = process.env.PORT || 8080

app.listen(SERVER_PORT, "0.0.0.0",() =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})