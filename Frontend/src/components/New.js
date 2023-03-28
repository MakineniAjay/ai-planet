import React, { useState } from 'react'
import '../styles/newsubm.css'
import { Link } from 'react-router-dom'
import FormData from 'form-data'
import axios from 'axios'

const New = () => {
    let formData = new FormData();
    // const [data, setData] = useState({});
    const [data, setData] = useState({title:"",summary:"",description:"",hack_name:"",hack_start_date:"",hack_end_date:"",gh_rep:"",o_link:""});
    const onChan = (e)=>{
        const current = new Date();
        console.log(current)
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        console.log(date)
        setData({...data, [e.target.name]: e.target.value})
        // console.log(data)
    }
    function send(){
        let imagefile = document.querySelector('#image');
        const current = new Date();
        const current_date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        formData.append('title', data.title)
        formData.append('summary', data.summary)
        formData.append('description', data.description)
        formData.append('image', imagefile.files[0])
        formData.append('hack_name', data.hack_name)
        formData.append('hack_start_date', data.hack_start_date)
        formData.append('hack_end_date', data.hack_end_date)
        formData.append('gh_rep', data.gh_rep)
        formData.append('o_link', data.o_link)
        formData.append('current_date', current_date)
        // console.log(data)
        // document.getElementById("buttn").click();
        axios.post('http://localhost:5000/api/subm', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })


    }
  return (
    <div className='contain'>
      <form id='newSubmission' className='data'>
        <h2>New Hackathon Submission</h2>

        <label htmlFor="title">Title</label>
        <input type="text" autoComplete="off" id='title' className='inptxt' name='title' onChange={onChan} placeholder='Title of your submission' required/>
        
        <label htmlFor="summary">Summary</label>
        <input type="text" autoComplete="off" id='summary' name='summary' className='inptxt' onChange={onChan} placeholder='A short summary of your submission (this will be visible with your submission)' required/>
        
        <label htmlFor="description">Description</label>
        {/* <input type="text" id='description' name='description' placeholder='Write a long descriptionof your project. You can describe your idea and approach here'/> */}
        <textarea name="description" id="description" rows="6" className='inptxt' onChange={onChan} placeholder='Write a long description of your project. You can describe your idea and approach here' required></textarea>
        
        <label htmlFor="">Cover Image</label>
        <p>Minimum resolution: 360px X 360px</p>
        <input type="file" id='image' className='inptxt' name='image' required/>
        
        <label htmlFor="hack_name">Hackathon Name</label>
        <input type="text" autoComplete="off" id='hack_name' className='inptxt' name='hack_name' onChange={onChan} placeholder='Enter the name of the hackathon' required/>
        <div className="datetype">
          <div>
            <label htmlFor="hack_start_date">Hackathon Start Date</label>
            <input type="date" id='hack_start_date' className='inptxt date' name='hack_start_date' onChange={onChan} required/>
          </div>
          <div>
            <label htmlFor="hack_end_date">Hackathon End Date</label>
            <input type="date" id='hack_end_date' className='inptxt date' name='hack_end_date' onChange={onChan} required/>
          </div>
        </div>
        
        <label htmlFor="gh_rep">Github Repository</label>
        <input type="text" autoComplete="off" id='gh_rep' className='inptxt' name='gh_rep' onChange={onChan} placeholder="Enter you submission's public github repository" required/>
        
        <label htmlFor="o_link">Other Links</label>
        <input type="text" autoComplete="off" id='o_link' className='inptxt' name='o_link' onChange={onChan} placeholder='You can upload a video demo or URL of your demo app here' required/>
        
        <p onClick={send}>print</p>
        <div className="line"></div>
        <button id='buttn'>submit</button>
        <Link to="/" type='submit' onClick={send} className="btn">Upload Submission</Link>

      </form>
    </div>
  )
}

export default New
