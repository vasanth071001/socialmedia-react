import React from "react"
import './post.css'
import {Link} from "react-router-dom"
const Post =({post}) => {
    return(
        <article className="post">
         <Link to={`post/${post.id}`}>  <h2>{post.title}</h2>
            <p className="postdate">{post.datetime}</p> </Link>
            <p className="postbody">{(post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`}</p>
            <hr></hr>
        </article>
    )
}

export default Post