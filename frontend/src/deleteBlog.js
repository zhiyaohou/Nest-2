import './App.css';
import React from 'react';

function deleteBlog() {
    const id = 0;
    const [blog,setBlog] = React.useState({content:'loading...',publishTime:new Date().toString(),user:0,vote:1});
    React.useEffect(()=>{
      fetch(`/blog/deleteBlog/${id}`,{
        method:'delete',
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => {
        console.log(data);
      });
    },[id])
    console.log(blog.content);
    return (
      <div className="App">
       
      </div>
    );
  }
  
  export default deleteBlog;