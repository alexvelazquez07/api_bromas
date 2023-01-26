const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaJoke = mongoose.Schema({
    nombre:String
})

const Jokes = mongoose.model('broma', SchemaJoke)

module.exports = Jokes