
import './App.css';
import React from 'react';
import CreateBlog from './createBlog';
import GetBlog from './getBlog';
import UpdateBlog from './updateBlog';
import DeleteBlog from './deleteBlog';


function App() {

  return (
    <div className="App">
      <CreateBlog />
      <GetBlog />
      <UpdateBlog />
      <DeleteBlog />
    </div>
  );
}

export default App;
