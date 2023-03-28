import React from 'react'
import Card from './Card'
import '../styles/Subm.css'

const Favsub = () => {
  return (
    <div className='content'>
      {/* {data.map((edata)=>{
        const str = btoa(
          String.fromCharCode(...new Uint8Array((edata.img.data.data)))
        )
          console.log(edata.img.data.data.toString('base64'))
          return <img src={`data:image/png;base64,${str}`} alt="" />
          return <h1>hey</h1>
          return <Card/>
      })} */}
      {/* <h1>All submissions will display here</h1> */}
      
      <Card/>
      <Card/>
    </div>
  )
}

export default Favsub
