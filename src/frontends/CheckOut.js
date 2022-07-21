import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const axios =require('axios');

let usernameRef =React.createRef();
let phoneRef = React.createRef();

const CheckOut =()=>{
    const [message,setMessage] = useState();
    const [check,setCheck]  = useState(false);

    
    const location = useLocation();
    const cartArr = location.state;

    return(
        <div className="container-fluid bg-dark p-5">
            <h2 className="pl-5"> <i className="fa-solid fa-circle-plus"></i> Your Order</h2>
{ check&&
            <div className="alert mt-4 alert-warning alert-dismissible fade show" role="alert">
              {message}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
}
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
      <th scope="col">Sub Amount</th>
    </tr>
  </thead>
  <tbody>
    {
      cartArr.map((e)=>{
       
        return(
          <tr>
          <td>{e.title}</td>
          <td>{e.qty}</td>
          <td>{e.price}</td>
          <td>{e.price * e.qty}</td>
        </tr>
        );
      })
    }
    <tr>
      <td colSpan={3}>Total Amount</td>
      <td >{cartArr.reduce((pre,next)=>pre + (next.price * next.qty),0)} MMK</td>
    </tr>
  </tbody>
</table>
 <form>
  <div className="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="text" className="form-control" ref={usernameRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
  </div>
  
  <div className="form-group">
    <label for="exampleInputEmail1">Phone</label>
    <input type="text" className="form-control" ref={phoneRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
  </div>

 <br/><br/>
  <button type="submit" onClick={(e)=> sendData(e,setMessage,setCheck,cartArr)} className="btn btn-primary"> <i className="fa-solid fa-circle-plus"></i> Confirm</button>
</form>
        </div>
    )
}

function sendData(e,setMessage,setCheck,cartArr){
    e.preventDefault();
   let dataValue ={
    username:usernameRef.current.value,
    phone:phoneRef.current.value,
   }
  
   console.log(dataValue)

   
   const formData = new FormData();
   formData.append("data",JSON.stringify(dataValue));
   formData.append("cart",JSON.stringify({order:cartArr}));
   axios({
    url:'http://127.0.0.1:8000/customer/',
    method:'post',
    data:formData
   }).then(function(response){
    setCheck(true);
  setMessage(response.data.message)
   })
}
export default CheckOut;