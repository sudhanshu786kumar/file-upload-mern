const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    File:{
        type:String
    }
})

const Model=mongoose.model("userdata",schema);
module.exports=Model;