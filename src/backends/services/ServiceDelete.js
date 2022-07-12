import React from 'react';
const axios = require('axios');

function ServiceDelete(props){
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/services/"+props.id+"/delete",
    }).then(response=>{
        window.location.href ="/admin/services";
    })
    return(
        <div>

        </div>
    )

}

export default ServiceDelete;