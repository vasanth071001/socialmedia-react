import React from 'react'
import './newpost.css'

const Newpost = ({posttitle,setposttitle,postbody,setpostbody,handlesubmit}) => {
  return (
    <main className='newpost'>
      <h2 className='newpost1'>New Post</h2>
      <form className='newpostform' onSubmit={handlesubmit}>
     <label className='heading'>Title:</label>
        <input type='text'
        className='posttitle'
        required
        value={posttitle}
        onChange={(e)=>setposttitle(e.target.value)}
        />
        <label>Post:</label>
        <textarea 
        required
        value={postbody}
        onChange={(e)=>setpostbody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default Newpost