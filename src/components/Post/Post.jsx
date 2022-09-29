import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";

function Post( {post} ) {
  // {post.map((po, index) => {
  //   const {_id, image} = po
  //   const base64String = btoa(
  //     String.fromCharCode(...new Uint8Array(image))
  //   )
  //  })}

  // const BLOG_API = "https://active-info.onrender.com";
  // const SEARCH_API = BLOG_API + "/blog-post";
  // const [post, setPost] = useState({})


  // useEffect(() => {
  //   const showPosts = async () => {
  //     const { data } = await axios.get(
  //     // ("https://active-info.onrender.com/blog-post")
  //       (`${BLOG_API}/blog-post`)
  //     );
  //     setPost(data.blog);
  //    console.log(data.blog);
  //   console.log(post);    
      
  //   };
  //   showPosts()
  // }, [])

console.log(post);

  
  return (
    <div className="display-post d-flex justify-content-center">
      <div className="post">
      
      <img className="posting" src="./card1.jpg" alt="" /> 
        <div className="postinfo">
          <div className="postcats">
           
            <span className="postcats">{post.category}</span>
        
          </div>
          <span className="posttitle fw-bold">
         
            {post.title}
          </span>
          <span className="posted">{new Date(post.updatedAt).toDateString()}</span>
          <p className="postdesc">
         
            {post.story}
            <Link to={`/post/${post._id}`} className="text-dark">
      Read more
            </Link>
          </p>
        </div>
      </div>

     
    </div>
  );
}

export default Post;
