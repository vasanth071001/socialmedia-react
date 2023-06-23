import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Edit = ({posts,handleedit,editbody,seteditbody,edittitle,setedittitle}) => {
    console.log('its coming')


const {id} = useParams()
const post = posts.find(post=>(post.id).toString()===id)
useEffect(()=>{
    if(post){
        setedittitle(post.title)
        seteditbody(post.body)
    }
   
}, [post,setedittitle,seteditbody])
    return (
        <main className='newpost'>
            {edittitle &&
            <>
            <h2>Edit post </h2>
            <form className='newpostform'
            onSubmit={(e)=>e.preventDefault()}>
                <label >title</label>
                <input 
                type='text'
                required
                value={edittitle}
                onChange={(e)=>setedittitle(e.target.value)}
                />
                <label>body</label>
                <textarea
                type='text'
                required
                value={editbody}
                onChange={(e)=>seteditbody(e.target.value)}
                
                
    
                />
           <button type='submit' onClick={()=>handleedit(post.id)}>Edit</button>

            </form>
            
            
            
            </>
            
            
            
            }

        </main>
   
  )
}

export default Edit