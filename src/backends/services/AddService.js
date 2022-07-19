import React, { useState } from "react";
const axios =require('axios');

let titleRef =React.createRef();
let desRef = React.createRef();
const AddService =()=>{
    const [file,setFile]= useState();
    const [message,setMessage] =useState();
    const [check,setCheck]  =useState(false);
    return(
        <div className="container-fluid bg-dark p-5">
            <h2 className="pl-5"> <i className="fa-solid fa-circle-plus"></i> Add New Service</h2>
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
    <label for="exampleInputEmail1">Title</label>
    <input type="text" className="form-control" ref={titleRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <textarea className="form-control" ref={desRef}></textarea>
 </div>


  <div className="custom-file">
  <input type="file" onChange={(e)=> setFile({file:e.target.files[0]})}className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" for="customFile">Choose file</label>
</div>
 <br/><br/>
  <button type="submit" onClick={(e)=> sendData(file,e,setMessage,setCheck)} className="btn btn-primary"> <i className="fa-solid fa-circle-plus"></i> Save</button>
</form>
        </div>
    )
}

function sendData(file,e,setMessage,setCheck){
    e.preventDefault();
   let dataValue ={
    title:titleRef.current.value,
    des:desRef.current.value,
  
   }
   console.log(dataValue)
   console.log(file.file.name)
   
   const formData = new FormData();
   formData.append("data",JSON.stringify(dataValue));
   formData.append("image",file.file);
   var reqToken = localStorage.getItem('token');
   axios({
    url:'http://127.0.0.1:8000/service',
    method:'post',
    data:formData,
    // headers:{
    //   'Authorization':`Basic ${reqToken}`
    // }

   }).then(function(response){
    setCheck(true);
  setMessage(response.data.message)
   })
}
export default AddService;