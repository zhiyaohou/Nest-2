import './App.css';
import React from 'react';

function updateBlog() {
    const id = 0;
    const [blog,setBlog] = React.useState({content:'loading...',publishTime:new Date().toString(),user:0,vote:1});
    React.useEffect(()=>{
      fetch(`/blog/updateBlog/${id}`,{
        method:'Patch',
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
       <input type="text" name="updateBlog"></input>
       <button id="update" onClick={()=>alert('Update Successfully!')}>Submit</button>
      </div>
    );
  }
  
  export default updateBlog;