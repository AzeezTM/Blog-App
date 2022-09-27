import { useState } from 'react'
import reactLogo from './react.svg'
import reactLog from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import './profile.css'
import { useEffect } from 'react'

function Profile() {
  const [file, setCount] = useState(reactLogo);
  const [fil, setfil] = useState(reactLog)

  function previewImg() {
    let file = document.getElementById('file').files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setCount(reader.result)
    }
    reader.onerror = (err) => {
      console.log("error has occured")
    }
  }
  function me() {
    document.getElementById('file').click()
  }

  function previewcoverimg() {
    let fil = document.getElementById('fil').files[0]
    let reader = new FileReader();
    reader.readAsDataURL(fil);

    reader.onload = () => {
      setfil(reader.result)
    }
    reader.onerror = (err) => {
      console.log("error has occured")
    }
  }
  function coverbtn() {
    document.getElementById('fil').click()
  }

  function editBio(param) {
    let bio = document.getElementById("bio");
    if (bio.readOnly == true) {
      document.getElementById("bio").readOnly = false;
      param.target.innerText = "Done"
    } else {
      document.getElementById("bio").readOnly = true;
      param.target.innerText = "Edit"

    }
    
  }
  function editInfo(param) {
    let info = document.getElementById("info");
    let edu = document.getElementById("education");
    let add = document.getElementById("address");
    if (info.readOnly == true) {
      info.readOnly = false;
      edu.readOnly = false;
      add.readOnly = false;
      param.target.innerText = "Done"
    } else {
      info.readOnly = true;
      edu.readOnly = true;
      add.readOnly = true;
      param.target.innerText = "Edit"

    }
    
  }
  

  return (
    <div className="App">


      <div className='pp' >

        <input type="file" id="file" onChange={previewImg} hidden />
        <input type="file" id="fil" onChange={previewcoverimg} hidden />

        <div className="card " id="cover-pic" >
          <img id="cover-pi" className="car card-img-top w-100 h-100" src={fil} alt="Card image" />
          <div className="card-img-overlay ">
            <button className="btn editCoverP" onClick={coverbtn}>Edit cover photo</button>
          </div>
        </div>
        <div className='profile-box modal-header'>
          <div className='card' id='dp'>
            <img className="card card-img rounded-circle bg-dark w-100 h-100" src={file} id="img" alt="" />
            <div className="card-img-overlay">
              <button className="btn editDp" onClick={me}>📷</button>
            </div>
          </div>
          <h2 id='user-name' className='navbar'>
            <div id='first-name'>first-name</div>-
            <div id='last-name'>last-name</div>
          </h2>

          <div className='addto'>
            <button className='btn d-block mb-2 addToStory'>Add to story</button>
            <button  className="btn pro" data-bs-toggle="modal" data-bs-target="#myModal" >✒️Edit profile</button>

          </div>

          <div className="modal " id="myModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit profile</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body ">
                  <div className='navbar'> <div>Profile picture</div> <button className="" onClick={me}>Edit</button> </div>
                  <img className="card card-img rounded-circle bg-dark   mx-auto" src={file} id="img2" alt="" />

                  <div className='navbar'> <div>Cover photo</div> <button className="" onClick={coverbtn}>Edit</button> </div>
                  <img id="edit-cover" className="card card-img w-75  mx-auto" src={fil} alt="Card image" />
                  <div className='navbar'><div>Bio</div> <button onClick={ev => editBio(ev)} >Edit</button></div>
                  <textarea className='mx-auto ' name="" id="bio" cols="30" rows="2" readOnly></textarea>
                  <div className='w-100'>
                    <div className='navbar'><div>Customize your intro</div> <button onClick={ev => editInfo(ev)}>Edit</button></div>
                    <div className="input-group w-75">
                      <span className="input-group-text btn btn-secondary">💼</span>
                      <input id='info' type="text" className="form-control " placeholder="Work" readOnly />
                    </div>
                    <div className="input-group w-75 mt-1 mb-1">
                      <span className="input-group-text btn btn-secondary">🏠</span>
                      <input id='address' type="text" className="form-control w-25" placeholder="Address" readOnly />
                    </div>
                    <div className="input-group w-75 ">
                      <span className="input-group-text btn btn-secondary">🎓</span>
                      <input id='education' type="text" className="form-control w-25" placeholder="Education" readOnly />
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Done</button>
                </div>

              </div>
            </div>
          </div>


        </div>

<div className='navbar w-75 mx-auto text-light'>
  <div>Post</div>
    <div>About</div>
    <div>Photos</div>
    <div>Videos</div>
</div>
      </div>
    </div>
  )
}

export default Profile
