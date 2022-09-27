import React from "react";
import "../adminGeneral.css";
import { useState } from "react";

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import "../manage-post/admin.css"

export default function AddUser (){

    const [lastName, setLastName] = useState("");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    return(
        <>
        <div className="admin-content">
       
        <div className="button-group">
            <a href="" className="BTN">Add User</a>
            <a href="" className="BTN m-5">Manage User</a>
        </div>
         
        <img  className="writeImg" src="card1.jpg" alt="" />
        <div className="content">
            <h2 className="page-title">Manage Users</h2>

            <div className="write">
                <form action="" className="writeForm">
              
             
            <input
              type="text"
              className="form-control mb-2 "
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2 "
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              name=""
              value={email}
              className="form-control mb-2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className="topic">
                    <label htmlFor="">Users</label>
                    <select name="" id="" >
                        <option value="">Admin</option>
                        <option value="">Author</option>
                    </select>
                </div>
                <button className="writeSubmit">Add User</button>
               
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