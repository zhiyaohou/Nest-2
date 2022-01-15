import './App.css';
import React from 'react';

function deleteBlog() {
    const id = 0;
    
    React.useEffect(()=>{
      fetch(`/blog/deleteBlog/${id}`,{
        method:'post',
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
      <div >
      </div>
    );
  }
  
  export default deleteBlog;