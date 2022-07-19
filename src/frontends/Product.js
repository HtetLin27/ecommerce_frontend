import React, { useState } from "react";
import '../App.css'
const axios = require('axios');

function Product(porps){
    const [data,setData] =useState([]);
    axios.get("http://127.0.0.1:8000/products").then(response=>{
        setData(response.data);
    })
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
                                        <a href="/products" className="card-btn text-center">   <i class="fa-solid fa-cart-arrow-down"></i> View</a>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
                    

                </div>
            </div>
        </section>
    )
}
export default Product;