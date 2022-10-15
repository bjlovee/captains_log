const mongoose = require('mongoose')

// Make A Schema 
const logSchema = new mongoose.Schema({
    title: { type: String, required: true},
    entry: { type: String, required: true},
    shipIsBroken: Boolean 
})


// Make A model From The Schema
const Logs = mongoose.model('Logs', logSchema)


// Export The Model For Use In The App

module.exports = Logs