// require db/connection as 'mongoose' and pull off Schema
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const FoodSchema = new Schema({
    name: String,
    price: String
})

// create the schema
const ShopSchema = new Schema({
    name: String,
    rating: Number,
    category: String,
    description: String,
    imgLink: String,
    foodItems: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }]
})

// export the schema
module.exports = mongoose.model('Shop', ShopSchema)