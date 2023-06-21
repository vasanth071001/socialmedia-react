import React from "react"
import './post.css'
const Post =({post}) => {
    return(
        <article className="post">
           <h2>{post.title}</h2>
            <p className="postdate">{post.datetime}</p>
            <p className="postbody">{(post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`}</p>
            <hr></hr>
        </article>
    )
}

export default Post