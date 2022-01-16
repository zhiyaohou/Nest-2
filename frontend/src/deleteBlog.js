import './App.css';
import React from 'react';
import { Button } from 'antd';

function DeleteBlog() {
    const id = 0;
    
    delete{
      try {
        const values = await form.validateFields()
        console.log('Submit:', values)
        fetch(`/blog/deleteBlog/${id}`, {
          method: 'post',
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          });
      } catch (errInfo) {
        console.log('Error:', errInfo);
      }
    };
    

    return (
      <div >
        <Button type="link" onClick="delete()">Delete Blog</Button>
      </div>
    );
  }
  
  export default DeleteBlog;