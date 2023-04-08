const {User}=require('User');

const getUser=async (uname)=>{
    const user=await User.findOne({user_name:uname});
    return user;
}




module.exports={
    getUser
}