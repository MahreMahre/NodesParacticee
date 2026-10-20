const express = require('express');
const app = express();
const noteModel = require('./models/node.model');

app.use(express.json());


app.post('/notes',async (req,res)=>{
    const data = req.body;
    await noteModel.create({
        title:data.title,
        content:data.content
    })
    res.status(201).json({message:"Note created successfully"});

}

)


app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message:"Notes fetched successfully",   
        notes:notes
    });
})






module.exports = app;