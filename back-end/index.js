const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const cors = require('cors')

const database = mysql2.createPool ({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "clebson"
})

app.use(cors())
app.use(express.json())

app.post("/register", (req,res) => {
    const { fullName } = req.body
    const { email } = req.body
    const { senha } = req.body
    const { gender } = req.body

    let poStDataBase = "INSERT INTO userregister ( userName, userEmail, userKey, userGender ) VALUES ( ?,?,?,? )"

    database.query(poStDataBase, [fullName, email, senha, gender], (err, result) => {
        console.log( err )
    })
})

app.get('/get', (req,res) => {
    let getUsers = "SELECT * FROM userregister"

    database.query(getUsers, (err, result) => {
        if(err) console.log( err )
        else res.send(result)
    } )
})




app.listen('3001', ()=> {
    console.log('Rodando servidor')
})