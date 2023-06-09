const {generate_token}=require('./authServices');
const {getUser,createUser}=require('../Dao/profileDao');

const login_user=async (req,res)=>{
    console.log("I am in login");
    const userDetails=req.body;
    let user=await getUser(userDetails.user_name);
    if(user){
        if(comparePassword(user.password,userDetails.password)){
            const token=generate_token(user._id);
            return res.json({userExists:true,jwt:token});
        }
        else
            return res.json({userExists:false});
        
    }
    res.json({userExists:false});

}

const register_user=async (req,res)=>{
    
    const userDetails=req.body;
    //check if user already present
    let user=await getUser(userDetails.user_name);

    //if user already present
    if(user)
        return res.json({userExists:true});
    
    //if user not present
    user=await createUser(userDetails);
    const token=generate_token(user._id);
    return res.json({userExists:false,jwt:token});
}

const comparePassword=(storedPassword,enteredPassword)=>{
    if(storedPassword===enteredPassword)
        return true;
    return false;
}


module.exports={
    login_user,
    register_user
}