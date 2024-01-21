

const mongoose = require('mongoose')
const express = require('express')

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/my_database"

const connectToDB = async () =>{
    mongoose.connect(MONGO_URL)
    .then((conn) =>{console.log(`Connect to DB: ${conn.connection.host}`)})
    .catch((error) =>{console.log(error.message)})
}


module.exports = connectToDB;