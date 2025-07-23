require('dotenv').config();
const express = require('express');
const routes = require('./routes/itemRoutes');
const app = express();
const database = require('./config/db');
app.use(express.json());

app.use('/api/items', routes);

const PORT = process.env.PORT || 3000;

//Remove this code after the all APIs works fine
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Node JS Projects...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
    database.dbConnection();//Connecting to the MongoDB;;;
});