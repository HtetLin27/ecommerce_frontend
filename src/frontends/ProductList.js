import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ProductDetail from "./ProductDetail";



function ProductList(props){
    return(
        <div>
            <Navigation></Navigation>
            <ProductDetail></ProductDetail>
            <Footer></Footer>
        </div>
    )
}
export default ProductList;