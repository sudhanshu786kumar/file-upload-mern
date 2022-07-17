import React from 'react'
import Data from '../components/Data';
import { useState,useEffect } from 'react';
import {axiosInstance} from '../Config';
const Home = () => {
  const fetchHandler = async () => {
    return await axiosInstance.get("/user").then((res) => res.data)
}
const [Posts, newval] = useState();


useEffect(()=>{
  fetchHandler().then((data) => newval(data))
},[])
  return (
    <div>
      {
      Posts?.map((det, i) => (
          <li key={i}>
            <Data data={det} />
          </li>
        ))
    }
    </div>
  )
}


export default Home