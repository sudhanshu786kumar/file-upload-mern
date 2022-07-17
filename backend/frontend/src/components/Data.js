import React from 'react'

const Data = (props) => {
    const{_id,name,email,password,photo}=props.data;
    
  return (
    <div>
      
        <h1>{name}</h1>
        <h1>{email}</h1>
        <p>{password}</p>
        <img src={`${photo}`} alt="fg"/>
    </div>
  )
}

export default Data