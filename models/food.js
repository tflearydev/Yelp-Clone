// require db/connection as 'mongoose' and pull off Schema
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

// create the schema
const FoodSchema = new Schema({
    name: String,
    price: String
})

// export the schema
module.exports = mongoose.model('Food', FoodSchema)