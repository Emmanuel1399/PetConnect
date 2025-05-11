const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    species:{
        type: String,
        require:true
    },
    breed: String,
    age: Number,
    adopted:{
        type:Boolean,
        default: false
    },
}, {timestamps:true})

module.exports = mongoose.model('Pet', PetSchema); 