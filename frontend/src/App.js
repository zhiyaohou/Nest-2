
import './App.css';
import React from 'react';
import createBlog from './createBlog';

function App() {
  const id = 0;
  const [blog,setBlog] = React.useState({content:'loading...',publishTime:new Date().toString(),user:2,vote:15});
  React.useEffect(()=>{
    fetch(`/blog/getBlog/${id}`).then(response => response.json())
    .then(data => {
      console.log(data);
      setBlog(data)
    });
  },[id])
  console.log(blog.content);
  return (
    <div className="App">
     <div>{blog.content}</div>
     <div>publishTime: {blog.publishTime}</div>
     <div>createBlog</div>
    </div>
  );
}

export default App;
