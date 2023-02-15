import React from 'react'
import { Outlet } from 'react-router';
import Post from '../Post/Post'
function Posts() {  
  return (
    <div className='posts'>
    <Post/>
    </div>
  );
}

export default Posts