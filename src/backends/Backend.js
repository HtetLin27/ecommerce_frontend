import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Products from './products/Products';
import Navigator from './Navigator';
import AddProduct from './products/AddProduct';
import Sidebar from './Sidebar';
import ProductEdit from './products/ProductEdit';
import ProductDelete from './products/ProductDelete'
import AddService from './services/AddService';
import Services from './services/Services';
import ServiceEdit from './services/ServiceEdit';
import ServiceDelete from './services/ServiceDelete';
import AddUser from './users/AddUser';
import Users from './users/Users';
import UserDelete from './users/UserDelete';


function Backend(props){
    const pathLocation = useLocation();
    const param = useParams();

    return(
<div>
<div class="wrapper">

<div class="preloader flex-column justify-content-center align-items-center">
</div>
<Navigator></Navigator>
<Sidebar></Sidebar>
<div className="content-wrapper">
 
   {
    (()=>{
        if(pathLocation.pathname === "/admin/product"){
            return <AddProduct></AddProduct>
        }else if(pathLocation.pathname === '/admin/products'){
            return <Products></Products>
        }
        else if(pathLocation.pathname === '/admin/service'){
            return <AddService></AddService>
        }else if(pathLocation.pathname === '/admin/services'){
            return <Services></Services>
        }else if(pathLocation.pathname === '/admin/user'){
            return <AddUser></AddUser>
        }else if(pathLocation.pathname === '/admin/users'){
            return <Users></Users>
        }
        else if(props.condi === true){
            if(props.action.name === "product"){
                if(props.action.update === true){
                  return <ProductEdit id={param.id}></ProductEdit>
                }else if(props.action.delete === true){
                    return <ProductDelete id={param.id}></ProductDelete>
                }
            }else if(props.action.name === "service"){
                if(props.action.update === true){
                     return<ServiceEdit id={param.id}></ServiceEdit>
                }else if(props.action.delete === true){
                    return <ServiceDelete id={param.id}></ServiceDelete>
                }
            }else if(props.action.name === "user"){
                if(props.action.delete === true){
                    return<UserDelete id={param.id}></UserDelete>
                }
            }
        }
        else{
            return <Products></Products>
        }
    })()

 } 
</div>
<footer class="main-footer">
<strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
All rights reserved.
<div class="float-right d-none d-sm-inline-block">
<b>Version</b> 3.2.0
</div>
</footer>
<aside class="control-sidebar control-sidebar-dark"/>
<div id="sidebar-overlay"></div></div></div>
 );
};
export default Backend;