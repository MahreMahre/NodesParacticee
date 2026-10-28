
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');



async function registerUser(req,res){
   const isUserAlreadyExist = await userModel.findOne({
    email : req.body.email
   })

   if(isUserAlreadyExist){
    res.status(409).json({
        message: 'User already exists'
    })

   }
    const {username,email,password} = req.body;
    const user = await userModel.create({
        username,email,password
    })
    const token = jwt.sign({
        id: user._id,
       
    }, process.env.JWT_SECRET)
      

    res.cookie('token', token, )
    res.status(201).json({
        message: 'User registered successfully',
        user,
        token
    })
}


module.exports = {
    registerUser
}
