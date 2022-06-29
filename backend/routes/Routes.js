const express=require('express');
const multer=require('multer');
const Route=express.Router();
const Handles=require('../controller/Handle')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../frontend/public');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const upload=multer({storage:storage})

Route.post('/signup',upload.single("photo"),Handles.GetData)
Route.get('/',Handles.GetUserDetails)
Route.get('/:id',Handles.GetUserSpecific)
Route.delete('/:id',Handles.deleteUser)
Route.post('/data/:id',upload.single("File"),Handles.UserMetaData)

module.exports=Route