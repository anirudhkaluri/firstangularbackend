const express=require("express");
const app=new express();
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
const profileRouter=require('./Routes/profileRoutes');
const blogRouter=require('./Routes/blogRoutes');


app.use(express.json());
app.use(express.urlencoded());


const cors=require('cors');
app.use(cors({
    origin:[
        ' http://localhost:4200/',
        'localhost:4200/',
        'http://localhost:4200',
        'localhost:4200'
    ],
    credentials:true
}));

app.use('/profile',profileRouter);
app.use('/blog',blogRouter);




const PORT=process.env.PORT||8000;

//const dbURI=process.env.db_connection.toString();

const dbURI="mongodb+srv://anirudhkaluri:anirudhisgreat@nodeapps.yx4jxxr.mongodb.net/firstangular?retryWrites=true&w=majority";

console.log("THE DB URI is",dbURI);

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



