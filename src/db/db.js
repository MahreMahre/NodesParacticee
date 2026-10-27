const mongoose = require('mongoose');


async function connectDB(){

    try{
        await mongoose.connect("mongodb+srv://umairjahangir98_db_user:aar7nfn4IXGYtKsy@vantix.byciqkq.mongodb.net/AuthSystem")
        console.log('MongoDB connected successfully');
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
}

module.exports = connectDB;