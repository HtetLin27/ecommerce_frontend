
import React from "react";


function LogOut(props){
    localStorage.removeItem("token");
    window.location.href ='/login';
    return(
        <div>

        </div>
    )
}
export default LogOut;