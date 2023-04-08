const User=require('../Models/user');

const getUser=async (uname)=>{
    try{
        const user=await User.findOne({user_name:uname});
        return user;
    }
    catch(error){
        console.log("error while fetching user",error);
    }
}


const createUser=async(userDetails)=>{
    const user= await User.create(userDetails);
    return user;
}

module.exports={
    getUser,
    createUser
}