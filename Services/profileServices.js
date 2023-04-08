const {generate_token}=require('./authServices');
const {User}=require('../Models/user');
const {getUser}=require('../Dao/profileDao');

const login_user=async (req,res)=>{
    
    const userDetails=req.body;
    let user=await getUser(userDetails.user_name);
    if(user){
        if(comparePassword(user,userDetails)){
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


module.exports={
    login_user,
    register_user
}