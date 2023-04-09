
const User=require('../Models/user');
const Blog=require('../Models/blog');


const add_blog=async(req,res)=>{
    const blog_details=req.body;
    blog_details.user=req.user;
    const blog=await Blog.save(blog_details);
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

const delete_blog=(req,res)=>{

}

const modify_blog=(req,res)=>{

}

module.exports={
    add_blog,
    get_all_blogs,
    get_my_blogs,
    delete_blog,
    modify_blog
}