const userModel = require('../models/user.model');

const jsonwebtoken = require('jsonwebtoken');

async function registerUser(req,res){


    const {username,email,password,role="user"} = req.body;
    const isUserAlreadyExist =  await userModel.findOne({
        $or :[
            {username : req.body.username},
            {email : req.body.email}
        ]
    })

    if(isUserAlreadyExist){
        res.status(409).json({
            "message" : "User already exists"
        })
    }
  const user = await userModel.create({
    username,
    email,
    password,
    role
  })
  const token = jsonwebtoken.sign({
    id : user._id,
    role : user.role
  },process.env.JWT_Secret)

  res.cookie("token",token,)

  res.status(201).json({
    message : "User registered successfully",
    user:{
        id : user._id,  
        username : user.username,
        email : user.email,
        role : user.role
    }
  })
}


module.exports = {
    registerUser
}
