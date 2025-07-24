require('dotenv').config();
const express = require('express');
const routes = require('./routes/itemRoutes');
const model = require('../src/models/itemModel');
const app = express();
const database = require('./config/db');
app.use(express.json());

app.use('/api/items', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
    database.dbConnection();//Connecting to the MongoDB;;;
});