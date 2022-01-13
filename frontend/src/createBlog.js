import './App.css';
import React from 'react';

function createBlog() {
    const id = 0;
    const [blog,setBlog] = React.useState({content:'new blog.',publishTime:new Date().toString(),user:1,vote:3});
    React.useEffect(()=>{
      fetch(`/blog/createBlog`,{
          method:'post',
          headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(data => {
        console.log(data);
        setBlog(data)
      });
    },[id])
    console.log(blog.content);
    return (
        <form onSubmit={this.handleSubmit}>
            <table className="createBlog" >
            <h2>Add Review</h2>              
              <tr>
              <th>User Number</th>
              <td><input ref={(ref) => {this.review_name= ref}} type="text" name="review_name" /></td>
              </tr>
    
              <tr>
              <th>Blog</th>
              <td><textarea ref={(ref) => {this.review_comment= ref}}  name="review_comment"/></td>
              </tr>
    
              <button id="add" onClick={()=>alert('successfully!')}>Submit</button>
    
            </table>
            </form>
    );
  }
  
  export default createBlog;