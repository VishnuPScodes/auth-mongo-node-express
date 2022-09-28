//const bcrypt = require("bcrypt");
import bcrypt from 'bcrypt'
//const express = require("express");
import express from 'express'
import registration from '../model/registration.js'



import  User from '../model/registration.js'

const app=express();


export const regPost=async (req,res)=>{
    const post=req.body
    const newPost=new registration(post)
    try {
     await newPost.save()
     res.status(200).json(newPost)
    }
    catch(err){
     res.status(400).json({message:err.message})
    }
}


