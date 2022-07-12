import React from "react";
import "../App.css"

function Footer(props){
    return(
     <section id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
               
                    <h2>CONTACT US</h2>
                    <i class="fa-solid fa-map-location"></i>
                    <span> Yangon , Myanmar</span><br/><br/>
                    <i class="fa-solid fa-phone"></i>
                    <span> +95124523871</span><br/><br/>
                    <i class="fa-solid fa-envelope"></i>
                    <span> react@gmail.com</span>
                </div>
                <div className="col-md-6">
                    <div className="map">
                        <h2>Our Location</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1112.0911142268262!2d96.4496568281662!3d22.914395079053815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37336056124c4f33%3A0xd7beba38d764d56d!2z4YCb4YC94YC-4YCx4YCc4YCt4YCV4YC64YCV4YC84YCs!5e1!3m2!1smy!2smm!4v1655974833915!5m2!1smy!2smm" width="600" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <p id="footer-bar">Desing & Development By React</p>
     </section>
    );
}

export default Footer;