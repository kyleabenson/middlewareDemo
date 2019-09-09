import express from 'express';

const fetch = require('node-fetch');
const PORT = 80;
const cors = require('cors');
// const app = express().use("*",cors());
const app = express

var mysql = require('mysql')



const attendeeNames = [
    {"first": "Kyle", "last": "Benson" },
    {"first": "Colin", "last": "McNaughton"},
    {"first": "Brian", "last": "Coursen"}
]

app.get('/', (req, res)=> {
    console.log("We have a new request")
    var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB
    })
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      return
    });
    console.log("Move allong...")
    connection.query('SELECT first, last FROM attendees WHERE type="Attendee"', function(err, rows, fields) {
    connection.end();
      if (!err) 
        return res.send(rows);
    else
      console.log('Error while performing Query.');
      return res.send(attendeeNames);
    }); 
});

app.listen(PORT, ()=>
    console.log(`Your server is running on port ${PORT}`)
);
