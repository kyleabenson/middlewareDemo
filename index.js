import express from 'express';


const fetch = require('node-fetch');
const app = express();
const PORT = 5000;
const cors = require('cors');

const attendeeNames = [
    {"first": "Kyle", "last": "Benson" },
    {"first": "Colin", "last": "McNaughton"},
    {"first": "Brian", "last": "Coursen"}
]

routes(app);

app.use(cors());

app.get('/', (req, res)=> {
    console.log("We have a new request")
    res.send(attendeeNames)
});

app.listen(PORT, ()=>
    console.log(`Your server is running on port ${PORT}`)
);
