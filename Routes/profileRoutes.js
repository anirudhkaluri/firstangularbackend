const express=require("express");
const router=express.router();

const profile_controller=require("../Services/profileServices");

router.get('/login',profile_controller.userLogin);