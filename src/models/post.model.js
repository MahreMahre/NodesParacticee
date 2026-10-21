const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    image:String,
    content:String
})




const postmodel = mongoose.model('posts',postSchema);;

module.exports = postmodel;
