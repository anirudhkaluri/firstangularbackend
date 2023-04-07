const express=require('express');
const router=express.Router();

const profile_controller=require("../Services/profileServices");

router.get('/login',profile_controller.login_user);

router.post('/register',profile_controller.register_user);

module.exports=router;