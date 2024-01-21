require('dotenv').config()
const express = require('express');
const app = express();
// const cors = require('cors')

const connectToDB = require('./config/database.js');

connectToDB()
const userRouter = require('./route/authRouter.js')
app.use(express.json())
app.use(express.urlencoded ({extended : true}))



app.use('/', userRouter)



module.exports = app;
