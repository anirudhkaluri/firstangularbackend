const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    user_name:{
        type:String,
        required:true,
        unique:true,
        minLength:6
    },
    password:{
        type:String,
        minLength:6
    }
});

const User=mongoose.model('User',userSchema);
module.exports=User;