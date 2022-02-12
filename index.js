import express from 'express';
import dotenv from "dotenv"
dotenv.config();
import bodyparser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import postroutes from "./routes/posts.js"


const app = express();




app.use(bodyparser.json({limit:"30mb", extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}));

app.use(cors());

app.use('/posts', postroutes);

app.get("/", (req,res)=>{
    res.send("Hello to Reflection API");
})


const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
.catch((error)=> console.log(error.message));

