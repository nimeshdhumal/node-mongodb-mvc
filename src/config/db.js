require('dotenv').config();
const mongoose = require('mongoose');
// Replace with your MongoDB connection string 'mongodb://localhost:27017/Item_List'
const mongoURI = 'mongodb://localhost:27017/Item_List';

exports.dbConnection = () => {
    mongoose.connect(`${mongoURI}`)
        .then(() => {
            console.log('MongoDB connected successfully!');
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Exit process with failure
        });
};