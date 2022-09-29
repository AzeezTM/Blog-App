import React from 'react'
// import "./Post.css"
import Post from '../Post/Post'

function Posts( {posts} ) {
  return (
    <div className='posts'>
      {posts.map((pos, index)=> (
          <Post post={pos}/>
         
      ))}
    
    </div>
  );
}

export default Posts