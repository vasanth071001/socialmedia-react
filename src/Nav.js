import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = ({search,setsearch}) => {
  return (
<nav className='nav'>
    <form  onSubmit={(e)=>e.preventDefault()}>
        <input type='text'
        className='search'
        placeholder='Search posts'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}

        ></input>
    </form>
    <div className='div'>
    <ul>
      <li><Link to="/">Home</Link></li>
 
      <li><Link to="/Post">Post</Link></li>
      <li><Link to="/About">About</Link></li>
    </ul>
    </div>
</nav>
  )
}

export default Nav