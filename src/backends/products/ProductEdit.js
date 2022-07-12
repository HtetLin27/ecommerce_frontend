
import React from 'react';
const axios = require('axios');


class ProductEdit extends React.Component{
     
        titleRef = "";
        desRef   = "";
        priceRef = "";
        id       = "";
        
        constructor(props){
                super(props);
                this.titleRef = React.createRef();
                this.desRef  = React.createRef();
                this.priceRef = React.createRef();
                this.id = props.id;
                this.state ={
                  data:{
                    title:"",
                    des: "",
                    price:""
                  },
                  file:"",
                  status:false,
                  message:""
                }
                this.getDataById(this.id);
        }

        getDataById = (id)=>{
          axios({
            method:"get",
            url:"http://127.0.0.1:8000/products/"+id,

          }).then((response)=>{
             this.setState({
              data:{
                title: response.data[0].title,
                des: response.data[0].description,
                price: response.data[0].price
              }
             })
          })
        }
        
        setFile = (e)=>{
          this.setState({
            file: e
          })
        }
        sendData =(file,e)=>{
           e.preventDefault();
           const formData = new FormData();
           formData.append ("image",file.file);
           const dataPath ={
            title:this.titleRef.current.value,
            des:this.desRef.current.value,
            price:this.priceRef.current.value
           };
           formData.append("data",JSON.stringify(dataPath));
           axios({
            method:"post",
            url:"http://127.0.0.1:8000/products/"+ this.id,
            data:formData
           }).then(response=>{
            this.setState({
              status:true,
              message:response.data.message
            })
           })
        }
    

    render(){
        return(
            <div className="container-fluid bg-dark p-5">
            <h2 className="pl-5"><i class="fa-solid fa-pen-to-square"></i> Product Edit</h2>

            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.titleRef} defaultValue={this.state.data.title}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <textarea className="form-control" defaultValue={this.state.data.des} ref={this.desRef}/>
 </div>

 <div className="form-group">
    <label for="exampleInputEmail1">Price</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.priceRef} defaultValue={this.state.data.price}/>
  </div>

  <div className="custom-file">
  <input type="file" onChange={(e)=>this.setFile({file:e.target.files[0]})} className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" for="customFile">Choose file</label>
</div>
 <br/><br/>
  <button type="submit" onClick={(e)=>this.sendData(this.state.file,e)} className="btn btn-primary"> <i className="fa-solid fa-circle-plus"></i> Update</button>
</form>
        </div>
        );
    }
}
export  default ProductEdit;