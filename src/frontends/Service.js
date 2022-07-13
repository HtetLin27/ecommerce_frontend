import React, { useState } from "react";
const axios = require('axios')

function Service(props){

const [data,setData] =useState([]);
   axios.get("http://127.0.0.1:8000/services").then(response=>{
    setData(response.data)
   })

    
    return(
        <section className="container">
            <h2 className="service-title text-center mt-3">Our Service</h2>
            <div className="row mt-5">
              
                {
                    data.map(e=>{
                        return(
                            <div className="col-md-4">
                            {/* <img src={"http://127.0.0.1:8000/images/"+e.image} alt="social"/> */}
                            <h2 className="mt-3">{e.title}</h2>
                            <p className="text-justify">{e.description}</p>
                            </div>
                        ) }
                    ) 
                 }
                
            </div>
        </section>
    )
}
export default Service;