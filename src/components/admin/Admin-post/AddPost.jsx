import React from "react";
import "../adminGeneral.css";
import { useState } from "react";
import pics from "./card1.jpg";

export default function AddPost (){

    
    const [file, setFiles]= useState(pics);

    function UploadImg(){
        let file = document.getElementById('fil').files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          setFiles(reader.result)
        }
        reader.onerror = (err) => {
          console.log("error has occured")
        }
    }
    function PostImage() {
        document.getElementById('fil').click()
      }
    
    return(
        <>
        <div className="admin-content">
       
        <div className="button-group ">
            
            <a href="" className="BTN">Add Posts</a>
            <a href="" className="BTN ">Manage Posts</a>
        </div>
        
        <main>
            <section>

        <div className="card m-5 " style={{border:"none"}} >
         <input type="file" id="fil" onChange={UploadImg} hidden />
          <img id="writeImg" src={pics} alt="Card image" />
          <div className="card-img-overlay writeImg">
            <button className="BTN" onClick={PostImage}>Post Image</button>
          </div>
         </div>
            </section>
         
      
        <div className="content">
            <h2 className="page-title">Manage Posts</h2>

            <div className="write">
                <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                     placeholder="Tell your story ..." 
                    type="text" 
                    className="writeInput writeText"
                    ></textarea>
                </div>
                <div className="topic">
                    <label htmlFor="">Topic</label>
                    <select name="" id="" >
                        <option value="">Tech</option>
                        <option value="">Entertainment</option>
                        <option value="">Sport</option>
                        <option value="">Nature</option>
                    </select>
                </div>
                <button className="writeSubmit">Add Post</button>
               
         
            </form> 
            </div>
        </div>
        </main>
        </div>
        
        
        </>
        
    );
}