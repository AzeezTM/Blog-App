import React from "react";
import Admin from "./ManagePost";
import "../adminGeneral.css";
import { useState } from "react";

export default function AddPost (){
    
    return(
        <>
        <div className="admin-content">
       
        <div className="button-group">
            
            <a href="" className="BTN">Add Posts</a>
            <a href="" className="BTN m-5">Manage Posts</a>
        </div>
         
        <img  className="writeImg" src="card1.jpg" alt="" />
        <div className="content">
            <h2 className="page-title">Manage Posts</h2>

            <div className="write">
                <form action="" className="writeForm">
                <div className="writeFormGroup">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">Image </label><br />
                    <input type="file" className="text-input" />
                </div>
                     {/* <div className="card " id="cover-pic" >
                    <img id="cover-pi" className="card-img-top w-100 h-100" src={fil} alt="Card image" />
                    <div className="card-img-overlay ">
                        <button className="editCP" onClick={coverbtn}>Edit cover photo</button>
                    </div>
                    </div> */}


                    <input type="file" className="fileInput" style={{display:"none"}} />
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
               
            {/* <div>
                <label htmlFor="">Title</label>
                <input type="text" name="title" className="text-input" />
            </div>
            <div>
                <label htmlFor="">Body</label>
                <textarea name="body" id="body"></textarea>
            </div> */}
            </form> 
            </div>
        </div>
        </div>
        
        </>
        
    );
}