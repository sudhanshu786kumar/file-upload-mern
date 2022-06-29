const mongoose=require('mongoose')


let  Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        

    }
})

const model=mongoose.model("user",Schema);

module.exports=model