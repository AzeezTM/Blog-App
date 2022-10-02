import React from 'react'
// import "./Post.css"
import Post from '../Post/Post'

function Posts( {posts} ) {
  return (
    <div className='posts'>
      {posts.map((pos)=> (
          <Post post={pos}/>
         
      ))}
      <h1>{posts.title}</h1>
    
    </div>
  );
}

export default Posts