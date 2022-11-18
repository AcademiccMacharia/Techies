const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'bensql',
    password: '',
    database: 'techies'
});

app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    db.query(  
        "SELECT * FROM employees WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
            console.log(err);
            }
                if (result.length > 0) {
                    res.redirect('/');
                } else {
                    res.send({ message: "Wrong username/password combination!" });
                }
            }
        );
    });


app.listen(3004, () => {
    console.log('running server');
});