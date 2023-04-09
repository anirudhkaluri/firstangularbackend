const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const blogSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    blog_title:{
        type:String,
    },
    blog_body:{
        type:String
    }
});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;