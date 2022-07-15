import React from 'react';
const axios = require('axios');

function ServiceDelete(props){
    var token = localStorage.getItem("token");
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/services/"+props.id+"/delete",
        headers:{
            "Authorization":`Basic ${token}`
        }
    }).then(response=>{
        window.location.href ="/admin/services";
    })
    return(
        <div>

        </div>
    )

}

export default ServiceDelete;