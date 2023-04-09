const express=require('express');
const router=express.Router();
const blog_controller=require('../Services/blogServices.js');
const authenticate=require('../Services/authServices');

router.get('/feed',authenticate.verify_token,blog_controller.get_all_blogs);
router.get('/home',authenticate.verify_token,blog_controller.get_my_blogs);
router.delete('/delete/:blog_id',authenticate.verify_token,blog_controller.delete_blog);
router.put('/edit/:blog_id',authenticate.verify_token,blog_controller.modify_blog);

module.exports=router;