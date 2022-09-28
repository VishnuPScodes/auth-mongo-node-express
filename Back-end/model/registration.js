import mongoose from "mongoose";


export const regSchema=mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})


const registration=mongoose.model('registration',regSchema);

export default registration