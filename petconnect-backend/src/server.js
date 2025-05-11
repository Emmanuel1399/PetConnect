require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;
//Database connection
connectDB()

app.listen(PORT, () => {console.log(`Server Running on Port htttp://localhost:${PORT}`)})