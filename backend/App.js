const cors=require('cors')
const express=require('express');
const {  mongoose } = require('mongoose');
const app=express();
const routes=require('./routes/Routes')

require('dotenv').config();
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.URL)
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>console.log(err));

app.use('/user',routes)


app.listen(5000,()=>console.log(`server is running at ${process.env.PORT}`))
