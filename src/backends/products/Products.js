import React from 'react';
const axios =require('axios');
class Products extends React.Component{
    constructor(props){
        super(props); 
        this.getData();
    }
    state ={data:[]};
    getData = ()=>{
              axios.get("http://127.0.0.1:8000/products").then(response=>{

        this.setState({data:response.data});
      })
    }
    render(){
        return(
<div className='container-fluid bg-dark' >
<h2 className="pt-5"> <i className="fa-solid fa-circle-plus"></i> Product List</h2>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.data.map((e)=>{
        
        return(
        
          <tr>
          <th >{this.state.data.indexOf(e)+1}</th>
          <td>{e.title}</td>
          <td>
            <a href={"/admin/products/"+e._id +"/delete"} className="mr-3"><i class="fa-solid fa-trash" ></i></a>
            <a href={"/admin/products/"+ e._id + "/edit"}><i class="fa-solid fa-pen-to-square"></i></a>
          </td>
        </tr>
        )
      })
    }
  </tbody>
</table>
            </div>
        )
    }

}


export default Products;