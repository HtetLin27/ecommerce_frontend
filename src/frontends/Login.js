
import React, { useState } from "react";
const axios =require('axios');

let emailRef = React.createRef();
let passwordRef =React.createRef();
const Login =()=>{
    const [message,setMessage] =useState();
    const [check,setCheck]  =useState(false);
    return(
        <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h2 className="pl-5">Please Login</h2>
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
    <label for="exampleInputEmail1">Email</label>
    <input type="text" className="form-control" ref={emailRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
  </div>

 <div className="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="text" className="form-control" ref={passwordRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"/>
  </div>

 <br/><br/>
  <button type="submit" onClick={(e)=> sendData(e,setMessage,setCheck)} className="btn btn-primary">Login</button>
</form>
        </div>
    )
}

function sendData(e,setMessage,setCheck){
    e.preventDefault();
   let dataValue ={
    email:emailRef.current.value,
    password:passwordRef.current.value
   }
   console.log(dataValue)

   
   const formData = new FormData();
   formData.append("data",JSON.stringify(dataValue));
   axios({
    url:'http://127.0.0.1:8000/login/',
    method:'post',
    data:formData
   }).then(function(response){
    setCheck(true);
  setMessage(response.data.message);
  console.log(response.data.status)
  if(response.data.status === true){
    localStorage.setItem("token",response.data.token);
    window.location.href ='/admin/products';
  }
   })
}
export default Login;

