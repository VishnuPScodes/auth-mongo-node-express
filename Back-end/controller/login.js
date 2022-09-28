

import bcrypt from 'bcrypt'

import express from 'express'
import registration from '../model/registration.js'
import jwt from 'jsonwebtoken'



const app=express();

export const loginPost=async (req,res)=>{
  const result=await registration.findOne({email:req.body.email});
  console.log(result.email)
  if (result){
    if(result.password==req.body.password){
        res.status(200).send({
            message:"Login Succefull"
        })
    }
    else{
        res.status(200).send({
            message:"login failed wrong password"
        })
    }
  }
  else{
    res.status.status(200).send({
        message:"User not found"
    })
  }

}