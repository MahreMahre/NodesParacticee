const express = require('express');
const postmodel = require('./models/post.model');
const multer = require('multer');
const app = express();
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });
const uploadfile = require('./services/storage.service');



app.post('/upload_post', upload.single('image'), async (req, res) => {
     const  result = await uploadfile(req.file.buffer);

 const post =    await postmodel.create({
        image:result.url,
        content:req.body.content
     })
   
     res.status(201).json({ message: 'Post created successfully', post });

})

app.get('/get_posts', async (req,res)=>{

    const posts=await postmodel.find()

    res.status(200).json({message:'Posts fetched successfully',posts :posts});


})





module.exports = app;