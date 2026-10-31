

const mongoose = require('mongoose');


async function connectDB(){

  try{
    await mongoose.connect("mongodb+srv://umairjahangir98_db_user:aar7nfn4IXGYtKsy@vantix.byciqkq.mongodb.net/RoleBase")
    console.log("Connected to MongoDB")
  }
  catch(error){
    console.error("Error connecting to MongoDB:", error)
  }

}


module.exports = connectDB;
