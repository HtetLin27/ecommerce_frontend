import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Service from "./Service";
import Description from "./Description";
import Product from "./Product";
import Footer from "./Footer";

function Frondends(props){
    return(
        <div className="appContainer">
        <Navigation></Navigation>
        <Header></Header>
        <Service></Service>
        <Description></Description>
        <Product></Product>
        <Footer></Footer>
        </div>
    )
}
export default Frondends;