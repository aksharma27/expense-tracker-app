const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');    //read whatever files is in required folder when called

const PORT = process.env.PORT;


const app = express();

app.use(express.json());
app.use(cors({
    //put your domain -> server to be accessed by 
}));



//API ENDPOINTS: 
// app.get('/', (req, res) => {
//     res.send('HOME PAGE');
// });
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/'+route)))


const server = () => {
    db();
    app.listen(PORT, ()=> {
        console.log(`listenting to port ${PORT}`);
    })
}

server();