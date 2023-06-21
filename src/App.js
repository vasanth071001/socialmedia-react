import Newpost from "./Newpost";
import Post from "./Post";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";



import { useEffect, useState } from "react";
import Feed from "./Feed";
import { format } from "date-fns"
import { Route, Routes } from "react-router-dom";


function App() {
const [posts,setposts] = useState([
  {
    id:1,
    
    title:"my life story part 1",
    datetime:"july 01 ,2021 11:17:36 AM",
    body:"for example "

  },{
    id:2,
    
    title:"my life story part2",
    datetime:"july 01 ,2021 11:17:36 AM",
    body:"for example"
  }
])

const handlesubmit =(e) =>{
  e.preventDefault();
 const id = posts.length ? posts[posts.length-1].id+1 :1
const datetime = format(new Date(),'MMMM dd, yyyy PP');
const data={id,title:posttitle,datetime,body:postbody}
const datalist=[...posts,data]
setposts(datalist)
setposttitle('')
setpostbody('')

 
}



  const [search,setsearch] = useState('')
  const [searchresult,setsearchresult] = useState([])
  const [posttitle,setposttitle] = useState('')
  const [postbody,setpostbody] = useState('')

  useEffect(() => {
    const filterList = posts.filter((post) => {
      return (
      
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  
    setsearchresult(filterList.reverse());
  }, [posts, search]);
  
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
 <Route path="post" element={
 <Newpost
 posttitle={posttitle}
 setposttitle={setposttitle}
 postbody={postbody}
 setpostbody={setpostbody}
 handlesubmit={handlesubmit}
 

 />} />
  <Route path="*" element={
 <Missing />} />
 <Route path="about" element={
 <About />} />
 </Routes>

 </div>  
 

  )
}

export default App;
