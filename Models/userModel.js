const mongoose=require('mongoose');
const {Schema}=mongoose;
const userSchema=new Schema({
    user_name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    }
});

const User=mongoose.model('User',userSchema);