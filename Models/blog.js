const mongoose= require('mongoose');
const Schema=mongoose.Schema;
//this model will be created by mongoose when the first save occurs
//this is because there is no unique index in this model
const blogSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    blog_title:{
        type:String,
        required:true
    },
    blog_content:{
        type:String,
        required:true
    }
});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;