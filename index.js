const express = require('express');
const app = express()

const cors = require('cors');
app.use(cors())
app.use(express.json())

const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Thepassword59..',
    database: 'employeesystem',

});

app.post('/create', (req, res) =>{
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name, age, position, wage) VALUES(?,?,?,?)', 
    [name, age, position, wage],
     (err, result) =>{
        if(err){
            console.log(err)
        } else{
            res.send("Data inserted")
        }
    }
    )

})

app.get('/employees', (req, res) =>{
    db.query("SELECT * FROM employees", (err, result) =>{
        if (err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})


app.listen(3001, () =>{
    console.log("Server running...")
});

