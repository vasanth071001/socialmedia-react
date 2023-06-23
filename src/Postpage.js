import React from 'react'
import {useParams,Link} from "react-router-dom"
import './postpage.css'



const Postpage = ({posts,handledelete}) => {
  const {id} = useParams();
  
  const post = posts.find(post =>(post.id).toString() === id);
  return (
   <main className="postpage">
     <article >
      {post && <>
           <h2>{post.title}</h2>
            <p className="postdate">{post.datetime}</p> 
            <p className="postbody">{post.body}</p>
              <Link to={`/edit/${post.id}`}>
            <button className='editbutton'>Edit</button></Link>     
         
            <button  onClick={()=>handledelete(post.id)} className="deletebutton" > Delete </button>
            <hr></hr>
            </>
      }{!post && 
      <>
      <h2>Post Not Found</h2>
      <Link to="/">Visit our Hompage </Link>
      </>
      }
        </article>

    </main>
  )
}

export default Postpage