require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let isConnected;

const DB_URL = `mongodb+srv://cy:${process.env.DB_PASSWORD}@cluster0.tdnbn.mongodb.net/test?retryWrites=true&w=majority`;

const connectToDatabase = () => {
    if (isConnected) {
        console.log('User is already connected.');
        return Promise.resolve();
    } 
    console.log('Using new db connection.')
    return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(db => {
        isConnected = db.connections[0].readyState;
    });
}

module.exports = connectToDatabase;