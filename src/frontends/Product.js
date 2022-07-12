import React from "react";
import '../App.css'

function Product(porps){
    return(
        <section id="product">
            <div className="container">
                <h2 className="text-center mt-3">Our Product</h2>
                <div className="row">
                    <div className="card col-md-3">
                        <img className="product-img" src="/assets/image/laptop1.png" alt="" height="230"/>
                        <div className="card-body">
                            <h5 className=" card-title text-center">Product One</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="row">
                                <p className="pl-5">MMK 250000</p>
                                <p className="pr-5 ml-auto">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <span className="ml-2 badge badge-bill badge-dark">0</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <a href="#" className="card-btn text-center">   <i class="fa-solid fa-cart-arrow-down"></i>View</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3">
                        <img className="product-img" src="/assets/image/laptop3.png" alt="" height="230"/>
                        <div className="card-body">
                            <h5 className=" card-title text-center">Product One</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="row">
                                <p className="pl-5">MMK 250000</p>
                                <p className="pr-5 ml-auto">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <span className="ml-2 badge badge-bill badge-dark">0</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <a href="#" className="card-btn text-center">   <i class="fa-solid fa-cart-arrow-down"></i>View</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3">
                        <img className="product-img" src="/assets/image/laptop2.png" alt="" height="230"/>
                        <div className="card-body">
                            <h5 className=" card-title text-center">Product One</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="row">
                                <p className="pl-5">MMK 250000</p>
                                <p className="pr-5 ml-auto">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <span className="ml-2 badge badge-bill badge-dark">0</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <a href="#" className="card-btn text-center">   <i class="fa-solid fa-cart-arrow-down"></i>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Product;