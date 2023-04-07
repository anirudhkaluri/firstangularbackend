const express=require("express");
const app=new express();

const profileRouter=require('./Routes/profileRoutes');

app.use(express.json());

app.use('/profile',profileRouter);


const PORT=process.env.PORT||8000;


app.listen(PORT,()=>{
    console.log(`listening to PORT ${PORT}`);
});