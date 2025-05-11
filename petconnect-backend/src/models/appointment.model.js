const mongoose = require('mongoose')
const { type } = require('os')

const appointmentSchema = new mongoose.Schema({
    petName : {type: String, required : true},
    ownerName : {type: String, required: true},
    date : {type : Date, required : true},
    reason: {type: String},
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending'}
}, {timestamps: true})

module.exports = appointmentSchema;