// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/newsubm.css'

function newsubm() {
  const [data, setData] = useState({title:"",summary:"",description:"",hack_name:"",hack_start_date:"",hack_end_date:"",gh_rep:"",o_link:""});
  const onChan = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }
  function print(){
    console.log(data)
  }
  return (
    <div className="contain">
      <form className='data' method='post'>
        <h2>New Hackathon Submission</h2>

        <label htmlFor="title">Title</label>
        <input type="text" id='title' className='inptxt' name='title' onChange={onChan} placeholder='Title of your submission'/>
        
        <label htmlFor="summary">Summary</label>
        <input type="text" id='summary' name='summary' className='inptxt' onChange={onChan} placeholder='A short summary of your submission (this will be visible with your submission)'/>
        
        <label htmlFor="description">Description</label>
        {/* <input type="text" id='description' name='description' placeholder='Write a long descriptionof your project. You can describe your idea and approach here'/> */}
        <textarea name="description" id="description" rows="6" className='inptxt' onChange={onChan} placeholder='Write a long descriptionof your project. You can describe your idea and approach here'></textarea>
        
        <label htmlFor="">Cover Image</label>
        <p>Minimum resolution: 360px X 360px</p>
        <input type="file" id='image' className='inptxt' name='image'/>
        
        <label htmlFor="hack_name">Hackathon Name</label>
        <input type="text" id='hack_name' className='inptxt' name='hack_name' onChange={onChan} placeholder='Enter the name of the hackathon'/>
        <div className="datetype">
          <div>
            <label htmlFor="hack_start_date">Hackathon Start Date</label>
            <input type="date" id='hack_start_date' className='inptxt date' name='hack_start_date' onChange={onChan} />
          </div>
          <div>
            <label htmlFor="hack_end_date">Hackathon End Date</label>
            <input type="date" id='hack_end_date' className='inptxt date' name='hack_end_date' onChange={onChan} />
          </div>
        </div>
        
        <label htmlFor="gh_rep">Github Repository</label>
        <input type="text" id='gh_rep' className='inptxt' name='gh_rep' onChange={onChan} placeholder="Enter you submission's public github repository"/>
        
        <label htmlFor="o_link">Other Links</label>
        <input type="text"  id='o_link' className='inptxt' name='o_link' onChange={onChan} placeholder='You can upload a video demo or URL of your demo app here'/>
        
        <div className="line"></div>
        <button onClick={print}></button>
        <Link to="/" className="btn">Upload Submission</Link>

      </form>
    </div>
  )
}

export default newsubm;

// const newsubm = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default newsubm
