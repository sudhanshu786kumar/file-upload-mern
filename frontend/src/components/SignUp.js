import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';




const SignUp = () => {

const [input, setInput] = useState({
  name: '',
  email: '',
  password:'',
  photo:''

})





const HandleSubmit = (e) => {
  e.preventDefault()
  handlePost()
  console.log(input)

}


const handlePost = async () => {
  const formData=new FormData();
  formData.append('photo',input.photo);
  formData.append('name',input.name);
  formData.append('email',input.email);
  formData.append('password',input.password)

  await axios.post('http://localhost:5000/user/signup', formData).then(res => res.data)
}
const handleChange = (e) => {
  setInput((pval) => (
    {
      ...pval,
      [e.target.name]: e.target.value
    }
  ))
  
}
const handlePhoto=(e)=>{
  setInput({...input,photo:e.target.files[0]}
   
)

}
console.log(input)
  return (
    <div>
    
   
      <form onSubmit={HandleSubmit} encType="multipart/form-data">
        Name<input type="text" name="name" value={input.name} onChange={handleChange}/>
        Email<input type="email" name='email' value={input.email} onChange={handleChange}/>
        password<input type="password" name='password' value={input.password} onChange={handleChange}/>
        photo<input type="file" name='photo'  onChange={handlePhoto} />
        
        <button >Submit</button>
      </form>
    </div>
  )
}

export default SignUp
