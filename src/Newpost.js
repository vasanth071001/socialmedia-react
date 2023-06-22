import React from 'react'
import './newpost.css'

const Newpost = ({posttitle,setposttitle,postbody,setpostbody,handlesubmit}) => {
  return (
    <main >
      <h2 className='newpost1'>New Post</h2>
     
      <form  onSubmit={handlesubmit}>
<div className="div1"><label className='heading'>Title:</label>
        <input type='text'
        className='posttitle'
        required
        value={posttitle}
        onChange={(e)=>setposttitle(e.target.value)}
        /></div>
<div id="div2"><label>Post:</label>
        <textarea 
        required
        value={postbody}
        onChange={(e)=>setpostbody(e.target.value)}
        /></div>
        <button type='submit'>Submit</button>
      </form>
  
    </main>
  )
}

export default Newpost