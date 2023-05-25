
import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3001;
var db = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b1b12979aeb4c3',
    password: 'bdc79cf8',
    database: 'heroku_b15747ef21e441a'
  })

// app.get('/', (req, res) => {
//     res.send("hello world")
// })

app.get('/', (req, res) => {
    const q = "SELECT * FROM new_table";

    db.query(q, (err, data) => {
        if(err) return res.json(error);
        return res.json(data)
    })
})

app.post('/create', (req, res) => {
    const q = "INSERT INTO new_table (`name`,`age`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.age,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(error);
        return res.json("success")
    })
})
app.put('/update', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    db.query("UPDATE new_table SET name = ?, age = ? WHERE id = ?", [name, age, id],
    (err, result) => {
        if(err) return err;
        else {
            res.send(result)
        }
    } )
 
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`app running ${PORT}`)
})