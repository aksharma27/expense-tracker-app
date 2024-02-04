const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { db } = require('./db/db');

const PORT = process.env.PORT;


const app = express();

app.use(express.json());
app.use(cors({
    //put your domain -> server to be accessed by 
}));



//API ENDPOINTS: 
app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

const server = () => {
    db();
    app.listen(PORT, ()=> {
        console.log(`listenting to port ${PORT}`);
    })
}

server();