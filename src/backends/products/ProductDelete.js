import React from 'react';
const axios = require('axios');

function ProductDelete(props){
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/products/"+props.id+"/delete",
    }).then(response=>{
        window.location.href ="/admin/products";
    })
    return(
        <div>

        </div>
    )

}

export default ProductDelete;