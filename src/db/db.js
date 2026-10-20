const mongoose = require('mongoose');

async  function connectDB() {

    await mongoose.connect('mongodb+srv://umairjahangir98_db_user:aar7nfn4IXGYtKsy@vantix.byciqkq.mongodb.net/Notedb')
    console.log('Connected to MongoDB');

}


module.exports = connectDB