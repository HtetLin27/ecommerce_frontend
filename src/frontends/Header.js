import React from "react";

function Header(props){
    return(
        <div id="header">
            <div className="row pt-5">
                <div className="col-md-6 text-center p-5">
                    <h2 className="header-title">What We Do?</h2>
                    <p className="header-para text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                 <button className="header-btn mt-3">Learn More</button>
                </div>
                <div className="col-md-6">
                    <img src="/assets/image/socialnetwork1.png" className="banner-image " alt="banner" />
                </div>
            </div>
             <img src="/assets/image/wave2.png" className="waveimg" alt=""/>
        </div>
    )
}

export default Header;