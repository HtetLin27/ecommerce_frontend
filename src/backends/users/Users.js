import React from 'react';
const axios =require('axios');
class Users extends React.Component{
    constructor(props){
        super(props); 
        this.getData();
    }
    state ={data:[]};
    getData = ()=>{
              axios.get("http://127.0.0.1:8000/users").then(response=>{

        this.setState({data:response.data});
      })
    }
    render(){
        return(
<div className='container-fluid bg-dark' >
<h2 className="pt-5"> <i className="fa-solid fa-circle-plus"></i> User List</h2>
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
          <td>{e.username}</td>
          <td>
            <a href={"/admin/users/"+e._id +"/delete"} className="mr-3"><i class="fa-solid fa-trash" ></i></a>
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


export default Users;