import React from 'react'
import Data from '../components/Data';
import { useState,useEffect } from 'react';
import axios from 'axios';const URL = 'http://localhost:5000/user';
const Home = () => {
  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
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