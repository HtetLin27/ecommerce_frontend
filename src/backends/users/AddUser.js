import React, { useState } from "react";
const axios =require('axios');

let usernameRef =React.createRef();
let emailRef = React.createRef();
let passwordRef =React.createRef();
const AddUser =()=>{
    const [message,setMessage] =useState();
    const [check,setCheck]  =useState(false);
    return(
        <div className="container-fluid bg-dark p-5">
            <h2 className="pl-5"> <i className="fa-solid fa-circle-plus"></i> Add New User</h2>
{ check&&
            <div className="alert mt-4 alert-warning alert-dismissible fade show" role="alert">
              {message}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
}
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="text" className="form-control" ref={usernameRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
  </div>
  
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="text" className="form-control" ref={emailRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
  </div>

 <div className="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="text" className="form-control" ref={passwordRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"/>
  </div>

 <br/><br/>
  <button type="submit" onClick={(e)=> sendData(e,setMessage,setCheck)} className="btn btn-primary"> <i className="fa-solid fa-circle-plus"></i> Save</button>
</form>
        </div>
    )
}

function sendData(e,setMessage,setCheck){
    e.preventDefault();
   let dataValue ={
    username:usernameRef.current.value,
    email:emailRef.current.value,
    password:passwordRef.current.value
   }
   console.log(dataValue)

   
   const formData = new FormData();
   formData.append("data",JSON.stringify(dataValue));
   axios({
    url:'http://127.0.0.1:8000/user',
    method:'post',
    data:formData
   }).then(function(response){
    setCheck(true);
  setMessage(response.data.message)
   })
}
export default AddUser;