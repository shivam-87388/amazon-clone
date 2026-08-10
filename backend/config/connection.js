const mongoose = require('mongoose');

const connection_db  = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connceted");
    } catch (error) {
        console.log("database connection failed",error.message);
    }

}
module.exports = connection_db;