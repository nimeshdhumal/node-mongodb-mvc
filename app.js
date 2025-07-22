require('dotenv').config();
const express = require('express');
const routes = require('./routes/itemRoutes');
const app = express();
const services = require('./services/saveUser');
const database = require('./config/db');
app.use(express.json());

app.use('/api/items',routes);

const PORT = process.env.PORT;

app.get('/', (req,res)=>{
    res.status(200).send('Welcome to the Node JS Projects...');
});

app.post('/save',(req,res)=>{
    return res.send(services.saveData());
});

app.listen(PORT, () => {
    console.log(`Server is running on port:'${PORT}`);
    database.dbConnection;
});