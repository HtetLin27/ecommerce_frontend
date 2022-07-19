import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
const axios = require('axios');


function ProductDetail(porps){
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);
    
     

    const addToCart =(id,title,price,cart,setCart,event)=>{
   event.preventDefault();
    if(cart.length === 0){
        setCart(cart = [{id:id,title:title,price:price,qty:1}]);
    }else{
        var arr =[];
        cart.map(data=>{
            if(data.id === id){
             arr.push(id);
            }
                
        
        });
        if(arr.includes(id)){
            var newArr =[...cart];
            newArr.forEach((task)=>{
                if(task.id === id){
                    task.qty += 1;
                }
            })
            setCart(newArr);
        }else{
            setCart(cart = [...cart,{id:id,title:title,price:price,qty:1}]);
        }
       
    }
    console.log(cart)
    }
    axios.get("http://127.0.0.1:8000/products").then(response=>{
        setData(response.data);
    })

    const navigate = useNavigate();

    const redirect =(cart)=>{
        navigate("/checkout",{state: cart});
    }

    return(
        <section id="product">
            <div className="container">
                <h2 className="text-center mt-3">Our Product</h2>
                <div className="row">
                    {
                        data.map(e=>{
                            return(
                                <div className="card col-md-3">
                                <img className="product-img" src= {"http://127.0.0.1:8000/images/"+e.image} alt="" height="230"/>
                                <div className="card-body">
                                    <h5 className=" card-title text-center">{e.title}</h5>
                                    <p className="card-text">{e.description}</p>
                                    <div className="row">
                                        <p className="pl-5">MMK {e.price}</p>
                                        <p className="pr-5 ml-auto">
                                        <i class="fa-solid fa-cart-arrow-down"></i>
                                        <span className="ml-2 badge badge-bill badge-dark">0</span>
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" onClick={(event)=>addToCart(e._id,e.title,e.price,cart,setCart,event)} className="card-btn text-center">   <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
                    

                </div>
                <button onClick={()=>{redirect(cart)}} className="btn btn-danger"><i className="badge bg-light">{cart.length}</i>Check Out</button>
            </div> 
        </section>
    )
}
export default ProductDetail;