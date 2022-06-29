

const schemas=require('../Model/SignUp')
const dataSchema=require('../Model/MetaData')


const GetData = async (req,res)=>{

const{email}=req.body;

const isUser=await schemas.findOne({email:email});
if(isUser){
    res.status(400).json({
        msg:"already exist user"
    })
}
const photo=req.file.filename
console.log(photo)
let user;
try{
    user=new schemas({
name :req.body.name,
email:req.body.email,
password:req.body.password,
photo

    })
    await user.save();
}catch(err){
    console.log(err)
}
if(!user){
    res.status(500).json({

        msg:"Can not add user !"
    })
}return res.status(201).json(user)
}

const GetUserDetails=async(req,res,next)=>{
let userData=await schemas.find()
if(!userData){
    res.status(401).json({
        msg:"no data"
    })
}
res.json(userData)

}
 const deleteUser=async(req,res,next)=>{
    const id=req.params.id;
    let userDel;
try{
userDel=await schemas.findByIdAndRemove(id)
}
catch(err){
    res.status(400).json(err)
}
if(!userDel){
    res.status(401).json({
        msg:"can not  delete"
    })
}return res.status(200).json(userDel)

 }
 const GetUserSpecific=async(req,res,nxt)=>{
    const id = req.params.id;
    let user;
    try{
        user=await schemas.findById(id);
    }catch(err){
        res.json(err)
    }
    if(!user){
        res.status(400).json({
            msg:"no user found"
        })
    }return res.status(200).json(user)


 }
 const UserMetaData=async(req,res,next)=>{
    const id = req.params.id
    
    let data=dataSchema.findById(id)
    try{

 data=new dataSchema({
        File:req.file.originalname
    })
await data.save()
    }catch(err){
        console.log(err)
    }
    if(!data){
        res.status(500).json({
            msg:"data not uploaded"
        })
    }return res.status(201).json(data)
 }

exports.UserMetaData=UserMetaData;
exports.GetUserSpecific=GetUserSpecific;
exports.GetData=GetData;
exports.GetUserDetails=GetUserDetails;
exports.deleteUser=deleteUser;