import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import regRouter from './routes/registration.js' 
import loginRouter from './routes/login.js'
import mongoose from 'mongoose';

const app=express()
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));







app.use(cors());


app.use('/reg',regRouter);
app.use('/login',loginRouter)

const CONNECTION_URL='mongodb+srv://vishnu:vishnu123@cluster0.fmlwghr.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    app.listen(5000,()=>{
        console.log('server is running on port 5000')
    })
}).catch((err)=>{
    console.log(err)
})