// require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
// const mongoose = require('mongoose')
const methodOverride = require('method-override')
// const { application } = require("express");

//Created our express app
const app = express()

app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // mongoose.connection.once('open', () => {
// //   console.log('connected to MongoDB Atlas')
// })

//NEW
app.get('/logs/new', (req, res) => {
    res.render('logs//New')
})




// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})