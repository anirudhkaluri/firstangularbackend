const express=require("express");
const app=new express();
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');



const profileRouter=require('./Routes/profileRoutes');

app.use(express.json());
app.use(express.urlencoded());

app.use('/profile',profileRouter);


const PORT=process.env.PORT||8000;

const dbURI=process.env.db_connection;

async function connectDB(){
    try{
        await mongoose.connect(dbURI);
        app.listen(PORT,()=>{
            console.log(`listening to PORT ${PORT}`);
        });
    }
    catch(error){
        console.log(`error connecting to MongoDB ${error}`);
    }
}

connectDB();



