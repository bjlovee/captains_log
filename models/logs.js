const mongoose = require('mongoose')

// Make A Schema 
const logsSchema = new mongoose.Schema({
    title: { type: String, required: true},
    entry: { type: String, required: true},
    shipIsBroken: Boolean 
})


// Make A model From The Schema
const Logs = mongoose.model('Logs', logsSchema)


// Export The Model For Use In The App

module.exports = Logs