import mongoose from "mongoose";


export const logSchema=mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})


const login=mongoose.model('registration',logSchema);

export default login