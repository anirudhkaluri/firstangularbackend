const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const TOKEN_KEY=process.env.TOKEN_KEY.toString();


const generate_token=(uid)=>{

    const token=jwt.sign({user:uid},TOKEN_KEY,{
        expiresIn:"2h"
    });
    return token;

}


const verify_token=(req,res,next)=>{

    const auth_header=req.headers['authorization'];
    const token=auth_header && auth_header.split(' ')[1];

    if(token===null)
        return res.status(401).json({isLogin:false});

    jwt.verify(token,process.env.TOKEN_KEY.toString(),(err,user)=>{
        if(err)
            return res.status(403).json({isLogin:false});
        else{
            req.user=user;
            res.locals.isLogin=true;
        }
    });
    next();
    
}

module.exports={
    verify_token,
    generate_token
}