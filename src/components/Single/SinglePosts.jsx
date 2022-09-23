import React from "react";
import "./SinglePosts.css";

function SinglePosts() {
  return (
    <div>
      <div className="singlePosts d-flex justify-content-center">
        <div className="singlePostRapper">
          <img src="advert.jpeg" className="singlePostImage d-flex" alt="" />
          <h1 className="singlePostTitle text-center">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-sharp fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>

          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              By <b>Mubarak</b>
            </span>
            <span className="singlePostDate">September 5, 2022</span>
          </div>

          <p className="singlePostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            autem atque, laudantium non esse, eos repudiandae saepe ex
            architecto enim eaque recusandae? Voluptate, corrupti! Expedita
            autem dolor iusto dignissimos. Dolorem.<p>Read more</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            autem atque, laudantium non esse, eos repudiandae saepe ex
            architecto enim eaque recusandae? Voluptate, corrupti! Expedita
            autem dolor iusto dignissimos. Dolorem. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quos, autem atque, laudantium non
            esse, eos repudiandae saepe ex architecto enim eaque recusandae?
            Voluptate, corrupti! Expedita autem dolor iusto dignissimos.
            Dolorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePosts;
