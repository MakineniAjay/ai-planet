// import React, { useEffect } from 'react'
import React from 'react'
import Card from './Card'
import '../styles/Subm.css'
import axios from 'axios'
import { useState } from 'react'

const Allsub = () => {
  const [data, setData] = useState([])
  const fun = ()=>{
    axios.post('http://localhost:5000/api/subm/getdata')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }
  fun()
  return (
    
    <div className='content'>
      {data.map((edata)=>{
        const str = btoa(
          String.fromCharCode(...new Uint8Array((edata.img.data.data)))
        )
          // console.log(edata.img.data.data.toString('base64'))
          // return <img src={`data:image/png;base64,${str}`} alt="" />
          return <Card
                    key = {edata._id}
                    title = {edata.title}
                    description = {edata.description}
                    str = {str}
                  />
      })}
      {/* <h1>All submissions will display here</h1> */}
    </div>
  )
}

export default Allsub
