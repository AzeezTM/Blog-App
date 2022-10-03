import React from 'react'
// import "./Post.css"
import Post from '../Post/Post'

function Posts() {
  // console.log(post)
  
  return (
    <div className='posts'>
      
      {/* { post.length > 0 && post.map((pos, index)=> (
          // console.log(pos.title),
          <Post key={index} post={pos}/>
      )) } */}
    <Post/>

    </div>
  );
}

export default Posts