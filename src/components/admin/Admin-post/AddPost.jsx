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
  const { user } = useContext(Context);
  const [author, setAuthor] = useState(user.user.username);
  let [profile, setProfile] = useState()

  // function handleFile(e) {
  //   console.log(e.target.files[0]);
  //   setFile(e.target.files[0]);
  //   console.log(file);
  // }
  const handleFile = async (ev) => {
    const newImage = ev.target.files[0]
    try {
      const formData = new FormData()
      formData.append("file", newImage)
      formData.append("upload_preset", "ghrauhb")
      const request = await axios.post("http://api.cloudinary.com/v1_1/dnsenxdow/image/upload", formData)
      profile = request.data["secure_url"]
      setProfile(profile)
      console.log(profile);
    } catch (error) {
      console.log(error);
    }

  }

  const handlesubmit = async (e) => {
    e.preventDefault();


    const url = "https://blog-9i5d.onrender.com/upload";
    console.log(url);
    const formData = new FormData();

    formData.set("image", profile);
    formData.set("story", story);
    formData.set("category", Categories);
    formData.set("title", title);
    formData.set("author", author);

    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      console.log(formData);
      setProfile("")
      setTitle("")
      setCategories("")
      setStory("")
    } catch (error) {
      console.log(error);
      alert("can't add to blog")
    }
  };

  console.log(user.user.username);
  console.log(author);

  console.log(Categories);

  return (
    <>
      <div className="admin-content">
        <main>
          <section>
            <div className="card m-5 " style={{ border: "none" }}>
              {file && (
                <img
                  id="writeImg"
                  src={URL.createObjectURL(file)}
                  alt="Card image"
                />
              )}
            </div>
          </section>

          <div className="content">
            <h2 className="page-title">Manage Posts</h2>

            <div className="write">
              <form action="" className="writeForm" onSubmit={handlesubmit}>
                <div className="writeFormGroup">
                  <label htmlFor="file" className="licon mb-3">
                    <AiIcons.AiOutlinePlusCircle />
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/png, image/gif, image/jpeg"
                    style={{ display: "none" }}
                    onChange={(e) => handleFile(e)}
                  />
                </div>

                <div className="topic">
                  <label htmlFor="" className="fw-bold fs-5">
                    Topic
                  </label>
                  <select
                    name=""
                    id=""
                    className="form-select select-div w-5 h-5"
                    style={{ height: "50px" }}
                    // aria-label="Default select example"
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
                  <input
                    required
                    type="text"
                    placeholder="Title"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                    value={title}
                    className="writeInput form-control mb-4"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="writeFormGroup">
                  <textarea
                    required
                    placeholder="Tell your story ..."
                    type="text"
                    style={{ height: "300px" }}
                    className="writeInput writeText form-control mb-5 "
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                  >
                    {""}
                  </textarea>
                </div>

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

// import React from "react";
// import "../adminGeneral.css";
// import { useState } from "react";
// import pics from "./card1.jpg";
// import * as AiIcons from "react-icons/ai";
// import axios from "axios";
// import { Context } from "../../../Context/Contex";
// import { useContext } from "react";

// export default function AddPost() {
//   const [story, setStory] = useState("");
//   const [file, setFile] = useState("");
//   const [title, setTitle] = useState("");
//   const [Categories, setCategories] = useState("");
//   const { user } = useContext(Context)
//   const [author, setAuthor] = useState("Tunji Mubarak Azeez");

//   const url = "https://blog-9i5d.onrender.com/upload";
//   const url2 = "https://blog-9i5d.onrender.com/blog-post";

//   function handleFile(e) {

//     console.log(e.target.files[0]);
//     setFile(e.target.files[0]);
//     console.log(file);
//   }

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       username: user.author,
//       title,
//       story,
//       Categories,
//     };

//     if (file) {
//       const formData = new FormData();

//       const filename = Date.now() + file.name;
//       formData.append("name", filename);
//       formData.append("file", file);
//       newPost.image = filename;
//       try {
//         await axios.post(url, formData);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     try {
//       const res = await axios.post(url2, newPost);
//       window.location.replace("/post/" + res.data._id);
//     } catch (err) {
//       console.log(err);
//     }

//   };

//   return (
//     <>
//       <div className="admin-content">

//         <main>
//           <section>

//             <div className="card m-5 " style={{ border: "none" }}>
//               {file &&
//               (<img id="writeImg" src={URL.createObjectURL(file)} alt="Card image" />)}

//             </div>
//           </section>

//           <div className="content">
//             <h2 className="page-title">Manage Posts</h2>

//             <div className="write">
//               <form action="" className="writeForm" onSubmit={handlesubmit}>
//                 <div className="writeFormGroup">
//                   <label htmlFor="file" className="licon mb-3">
//                     <AiIcons.AiOutlinePlusCircle />

//                   </label>
//                   <input
//                     type="file"
//                     id="file"
//                     accept="image/png, image/gif, image/jpeg"
//                     style={{ display: "none" }}
//                     onChange={(e) => handleFile(e)}
//                   />

//                 </div>

//                 <div className="topic">
//                   <label htmlFor="" className="fw-bold fs-5">
//                     Topic
//                   </label>
//                   <select
//                     name=""
//                     id=""
//                     className="form-select select-div w-5 h-5"
//                     style={{height:"50px"}}
//                     aria-label="Default select example"
//                     value={Categories}
//                     onChange={(e) => setCategories(e.target.value)}
//                   >
//                     <option value="Tech">Tech</option>
//                     <option value="Entertainment">Entertainment</option>
//                     <option value="Sport">Sport</option>
//                     <option value="Nature">Nature</option>
//                   </select>
//                 </div>
//                 <div>

//                   <input
//                     type="text"
//                     placeholder="Title"
//                     style={{fontSize: "20px", fontWeight:"bold"}}
//                     autoFocus={true}
//                     value={title}
//                     className="writeInput form-control mb-4"
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </div>

//                 <div className="writeFormGroup">
//                   <textarea
//                     placeholder="Tell your story ..."
//                     type="text"
//                     style={{height:"300px",}}
//                     className="writeInput writeText form-control mb-5 "
//                     value={story}
//                     onChange={(e) => setStory(e.target.value)}
//                   >

//                   </textarea>
//                 </div>
//                 <button className="btn btn-outline-info" type="submit">
//                   Add Post
//                 </button>
//               </form>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }
