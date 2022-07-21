import React from 'react';
const axios =require('axios');
class OrderList extends React.Component{
    constructor(props){
        super(props); 
        this.getData(this.props.customerId);
    }
    state ={data:[]};
    getData = (customerId)=>{
              axios.get("http://127.0.0.1:8000/orderlist/"+customerId).then(response=>{

        this.setState({data:response.data});
      })
    }
    render(){
        return(
<div className='container-fluid bg-dark' >
<h2 className="pt-5"> <i className="fa-solid fa-circle-plus"></i> Order List</h2>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.data.map((e)=>{
        
        return(
        
          <tr>
          <td>{e.title}</td>
          <td>{e.qty}</td>
          <td>{e.price}</td>
          <td>{e.qty * e.price}</td>
        </tr>
        )
      })
    }
    <tr>
      <td colSpan={3}>Total</td>
      <td>{this.state.data.reduce((total,value)=>total+(value.qty * value.price),0)}</td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }

}


export default OrderList;