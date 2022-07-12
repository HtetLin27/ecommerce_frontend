import React from 'react';
const axios = require('axios');

function UserDelete(props){
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/users/"+props.id+"/delete",
    }).then(response=>{
        window.location.href ="/admin/users";
    })
    return(
        <div>

        </div>
    )

}

export default UserDelete;