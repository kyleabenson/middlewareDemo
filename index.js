import express from 'express';

const fetch = require('node-fetch');
const app = express();
const PORT = 5000;
const cors = require('cors');

var mysql = require('mysql')



// const attendeeNames = [
//     {"first": "Kyle", "last": "Benson" },
//     {"first": "Colin", "last": "McNaughton"},
//     {"first": "Brian", "last": "Coursen"}
// ]

app.use(cors());

app.get('/', (req, res)=> {
    console.log("We have a new request")
    var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: DB_USER,
      password: DB_PASS,
      database: DB_DB
    })
    connection.query('SELECT first_name, last_name FROM attendance WHERE attendee_type="Attendee"', function(err, rows, fields) {
    connection.end();
      if (!err) 
        return res.send(rows);
    else
      console.log('Error while performing Query.');
      return;
    }); 
});

app.listen(PORT, ()=>
    console.log(`Your server is running on port ${PORT}`)
);
