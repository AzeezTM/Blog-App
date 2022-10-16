import React from "react";
import "../adminGeneral.css";
import { useState } from "react";
import pics from "./card1.jpg";
import * as AiIcons from "react-icons/ai";
import axios from "axios";
import { Context } from "../../../Context/Contex";
import { useContext } from "react";

export default function AddPost() {
  const [story, setStory] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [Categories, setCategories] = useState("");
  const { user } = useContext(Context)
  const [author, setAuthor] = useState("Tunji Mubarak Azeez");

  function handleFile(e) {
   
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    console.log(file);
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    // const newPost = {
    //   username: user.username,
    //   title,
    //   story
    // }





    const url = "https://blog-9i5d.onrender.com/upload";
    // const url2 = "https://blog-9i5d.onrender.com/blog-post";
    console.log(url);
    const formData = new FormData();

    formData.set("image", file);
    formData.set("story", story);
    formData.set("category", Categories);
    formData.set("title", title);
    formData.set("author", author);

    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const response = await axios.post(url2, newPost);
    //   window.location.replace("/blog-post/" + response.data._id);
      
    // } catch (error) {
    //   console.log(error);
    // }


  };

  return (
    <>
      <div className="admin-content">
        {/* <div className="button-group ">
            
            <a href="" className="BTN">Add Posts</a>
            <a href="" className="BTN ">Manage Posts</a>
        </div> */}

        <main>
          <section>
            {/* {file && } */}
            <div className="card m-5 " style={{ border: "none" }}>
              {file && 
              (<img id="writeImg" src={URL.createObjectURL(file)} alt="Card image" />)}
              {/* <img id="writeImg" src={pics} alt="Card image" /> */}
              {/* <div className="card-img-overlay writeImg"></div> */}
            </div>
          </section>

          <div className="content">
            <h2 className="page-title">Manage Posts</h2>

            <div className="write">
              <form action="" className="writeForm" onSubmit={handlesubmit}>
                <div className="writeFormGroup">
                  <label htmlFor="file" className="licon mb-3">
                    <AiIcons.AiOutlinePlusCircle />
                    {/* <i className="btn btn-outline-dark  border border-0 fa-solid fa-image fs-5 ">
                      {" "}
                    </i>{" "} */}
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/png, image/gif, image/jpeg"
                    style={{ display: "none" }}
                    onChange={(e) => handleFile(e)}
                  />

                  {/* <input type="text" placeholder="Author" value={author}  className="writeInput form-control mb-4" autoFocus={true}  onChange={(e) => setAuthor(e.target.value)}/> */}
                </div>

                <div className="topic">
                  <label htmlFor="" className="fw-bold fs-5">
                    Topic
                  </label>
                  <select
                    name=""
                    id=""
                    className="form-select select-div w-5"
                    aria-label="Default select example"
                    value={Categories}
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <option value="Tech">Tech</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Sport">Sport</option>
                    <option value="Nature">Nature</option>
                  </select>
                </div>
                <div>
                  {/* <label htmlFor="" className="fw-bold fs-5">
                    Title
                  </label> */}
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    className="writeInput form-control mb-4"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="writeFormGroup">
                  <textarea
                    placeholder="Tell your story ..."
                    type="text"
                    className="writeInput writeText form-control mb-5"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                  >
                    {""}
                  </textarea>
                </div>

                {/* <button className="btn btn-outline-dark fw-bold" type="submit">
                  Post
                </button> */}

                <button className="btn btn-outline-info" type="submit">
                  Add Post
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
