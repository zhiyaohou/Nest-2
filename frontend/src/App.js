
import './App.css';
import React from 'react';
import CreateBlog from './createBlog';
import GetBlog from './getBlog';
import UpdateBlog from './updateBlog';


function App() {

  return (
    <div className="App">
      <CreateBlog />
      <GetBlog />
      <UpdateBlog />
    </div>
  );
}

export default App;
