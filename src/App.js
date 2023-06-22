import Newpost from "./Newpost";
import Post from "./Post";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";

import Postpage from "./Postpage"

import { useEffect, useState } from "react";
import Feed from "./Feed";
import { format } from "date-fns"
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from'./api/post'


function App() {
const [posts,setposts] = useState([])
//axious post//
const handlesubmit = async (e) =>{
  e.preventDefault();
 const id = posts.length ? posts[posts.length-1].id+1 :1
const datetime = format(new Date(),'MMMM dd, yyyy PP');
const data={id,title:posttitle,datetime,body:postbody}
try{
const response = await api.post('/posts',data)
const datalist=[...posts,response.data]
setposts(datalist)
setposttitle('')
setpostbody('')
navigate('/')
} catch(err){
  if(err.response){
    console.log(err.data)
    console.log(err.status)
    console.log(err.headers)
  }
else{
    console.log(`error: ${err.Messages}`)
  }
}
 
}



  const [search,setsearch] = useState('')
  const [searchresult,setsearchresult] = useState([])
  const [posttitle,setposttitle] = useState('')
  const [postbody,setpostbody] = useState('')
  const [edittitle,setedittitle] = useState('')
  const [editbody,seteditbody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filterList = posts.filter((post) => {
      return (
      
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  
    setsearchresult(filterList.reverse());
  }, [posts, search]);
  //axios delete//
  const handledelete = async(id)=>{
    await api.delete(`/posts/${id}`)
   const postlist = posts.filter((post)=> post.id !== id)
  
   
    setposts(postlist);
    navigate('./')
 
  
  
  
}


//axios api get//
useEffect(()=>{
  const fetchpost = async ()=>{
    try{
      const response = await api.get('/posts')
      setposts(response.data)
    }
    catch(err){
      if(err.response){
        console.log(err.data)
        console.log(err.status)
        console.log(err.headers)
      }else{
        console.log(`error: ${err.Messages}`)
      }
  
      
    }
  }
  fetchpost();
}, []);

//axios put(edit) */
const handleedit = async(id)=>{
  const datetime = format(new Date(),'MMMM dd, yyyy PP');
const updatedata={id,title:edittitle,datetime,body:editbody}
try{
  const response = await api.put(`/posts/${id}`,updatedata)
  setposts(posts.map(post => post.id === id ? {...response.data}: post))
  setedittitle('')
  seteditbody('')
  navigate('/')
}catch(err){
console.log(`Error:${err.message}`)
}
}




  return (
 
  
  
 <div className="app">
  
 <Header title="Social Media" />
 <Nav 
 search={search}
 setsearch={setsearch}
 
 />
 <Routes>
  <Route path="/" element={
 <Home 
 posts={searchresult}
 />} />
 <Route path="post" > <Route index element={
 <Newpost
 posttitle={posttitle}
 setposttitle={setposttitle}
 postbody={postbody}
 setpostbody={setpostbody}
 handlesubmit={handlesubmit}
 

 />} />
 <Route path=":id" element={<Postpage 
 posts={posts}
 handledelete={handledelete}
 />} />
 </Route>
  <Route path="*" element={
 <Missing />} />
 <Route path="about" element={
 <About />} />
 </Routes>

 <Footer />
 </div>  
 

  )
}

export default App
