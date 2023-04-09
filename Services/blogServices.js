
const User=require('../Models/user');
const Blog=require('../Models/blog');


const add_blog=async(req,res)=>{

    const blog=await Blog.create({
        user:req.user,
        blog_title:req.body.blog_title,
        blog_content:req.body.blog_content
    }
    );
    return res.json(blog);
}

const get_all_blogs=async (req,res)=>{
    try{
        const blog_array=await Blog.find();
        return res.json(blog_array);
    }
    catch(err){
        console.log(`ERROR retrieving all blogs ${err}`);
        return res.send('error');
    }
}

const get_my_blogs=async (req,res)=>{
    const _id=req.user;
    try{
        const myBlogs=await Blog.find({user:_id});
        return res.json(myBlogs);
    }
    catch(error){
        console.log(`ERROR retrieving my blogs ${err}`);
        return res.send('error');
    }
}

const delete_blog=async (req,res)=>{
    const blogid=req.params.id;
    const result=await Blog.findByIdAndDelete(blogid);
    res.json({deleted:true});
}

const modify_blog=async (req,res)=>{
    const blogid=req.params.id;
    const result=await Blog.updateOne({_id:blogid},{
        user:req.user,
        blog_title:req.body.blog_title,
        blog_content:req.body.blog_content
    });
    res.json({updated:true});
}

module.exports={
    add_blog,
    get_all_blogs,
    get_my_blogs,
    delete_blog,
    modify_blog
}