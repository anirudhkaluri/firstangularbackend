const {User}=require('User');

const getUser=async (uname)=>{
    const user=await User.findOne({user_name:uname});
    return user;
}


const createUser=async(userDetails)=>{
    const user= await User.create(userDetails);
    return user;
}

module.exports={
    getUser,
    createUser
}