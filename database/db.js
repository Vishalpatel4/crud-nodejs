const mongoose = require('mongoose');

require('dotenv').config()

const database = mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (error) => {
        if (!error) {
            console.log('connected to MongoDB')
        } else {
            console.log('Connection error: ' + error)
        }
    }
)


module.exports = database;