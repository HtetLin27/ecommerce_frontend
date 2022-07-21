import React from "react";
import '../App.css';
function Sidebar(){
    return(
<aside className="main-sidebar sidebar-dark-primary elevation-4" style={{"height":"550px"}}>
<a href="#" className="brand-link">
<img src="dist/img/AdminLTELogo.png" alt="" className="brand-image img-circle elevation-3"/>
<span className="brand-text font-weight-light">AdminLTE Shopping</span>
</a>

<div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition"><div className="os-resize-observer-host observed"><div className="os-resize-observer"></div></div><div className="os-size-auto-observer observed"><div className="os-resize-observer"></div></div><div className="os-content-glue"></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible"><div className="os-content">

{/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
<div className="image">
<img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt=""/>
</div>
<div className="info">
 <a href="#" className="d-block">Admin DashBoard</a>
</div>
</div> */}

<div className="form-inline">
<div className="input-group" data-widget="sidebar-search">
<input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
<div className="input-group-append">
<button className="btn btn-sidebar">
<i className="fas fa-search fa-fw"></i>
</button>
</div>
</div><div className="sidebar-search-results"><div className="list-group"><a href="#" className="list-group-item"><div className="search-title"><strong className="text-light"></strong>N<strong className="text-light"></strong>o<strong className="text-light"></strong> <strong className="text-light"></strong>e<strong className="text-light"></strong>l<strong className="text-light"></strong>e<strong className="text-light"></strong>m<strong className="text-light"></strong>e<strong className="text-light"></strong>n<strong className="text-light"></strong>t<strong className="text-light"></strong> <strong className="text-light"></strong>f<strong className="text-light"></strong>o<strong className="text-light"></strong>u<strong className="text-light"></strong>n<strong className="text-light"></strong>d<strong className="text-light"></strong>!<strong className="text-light"></strong></div><div className="search-path"></div></a></div></div>
</div>


<div className="Product mt-2 ">
    <div className="pt-2 pb-2 bg-primary">
    <a className="pl-3 font-weight-bold " href="#addProduct" data-toggle="collapse"  aria-expanded="false"><i className="fa-solid fa-list-check"></i> Products <i className="fa-solid fa-angle-down down-arr"></i></a>
    </div>
<div className="" id="addProduct">
    <div className=" pl-3 pt-2 pb-2 drop  font-weight-bold">
        <a href="/admin/product" ><i className="fa-solid fa-circle-plus"></i> Add Product</a>
    </div>
    <div className="pl-3 pt-2 drop pb-2 font-weight-bold">
        <a href="/admin/products" ><i className="fa-solid fa-list-check"></i> Product List</a>
    </div>
</div>
</div>
<div className="Service mt-2 ">
    <div className="pt-2 pb-2 bg-primary">
    <a className="pl-3 font-weight-bold " href="#addServices" data-toggle="collapse"  aria-expanded="false"><i className="fa-solid fa-list-check"></i> Services<i className="fa-solid fa-angle-down down-arr1"></i></a>
    </div>
<div className="" id="addServices">
    <div className=" pl-3 pt-2 pb-2 drop font-weight-bold">
        <a href="/admin/service" ><i className="fa-solid fa-circle-plus"></i> Add Service</a>
    </div>
    <div className="pl-3 pt-2 drop pb-2 font-weight-bold">
        <a href="/admin/services" ><i className="fa-solid fa-list-check"></i> Service List</a>
    </div>
</div>
</div>
<div className="User mt-2 ">
    <div className="pt-2 pb-2 bg-primary">
    <a className="pl-3 font-weight-bold " href="#addServices" data-toggle="collapse"  aria-expanded="false"><i className="fa-solid fa-list-check"></i> Users<i className="fa-solid fa-angle-down down-arr2"></i></a>
    </div>
<div className="" id="addServices">
    <div className=" pl-3 pt-2 pb-2 drop font-weight-bold">
        <a href="/admin/user" ><i className="fa-solid fa-circle-plus"></i> Add User</a>
    </div>
    <div className="pl-3 pt-2 drop pb-2 font-weight-bold">
        <a href="/admin/users" ><i className="fa-solid fa-list-check"></i> Users List</a>
    </div>
</div>
<div className="pl-3 pt-2 drop pb-2 font-weight-bold">
        <a href="/order" ><i className="fa-solid fa-list-check"></i> Order</a>
    </div>
<div className="pl-3 pt-2 drop pb-2 font-weight-bold">
        <a href="/logout" ><i class="fa-solid fa-power-off"></i> Logout</a>
    </div>
</div>
</div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle"></div></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle"></div></div></div><div className="os-scrollbar-corner"></div></div>


</aside>
    );
}
export default Sidebar;