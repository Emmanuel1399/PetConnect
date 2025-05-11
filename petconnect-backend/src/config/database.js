const mongoose = require('mongoose');
//Connectio to Mongo Database
const connectDB = async ()=> {
    try {
        const connectionMDB = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected on ${connectionMDB.connection.host}`)
    } catch (error) {
        console.log('MongoDB connection error',error.message)
        process.exit(1);        
    }
};

module.exports = connectDB;