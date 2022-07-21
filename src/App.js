
import './App.css';
import Frondends from './frontends/Frondends';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Backend from './backends/Backend';
import Login from './frontends/Login';
import LogOut from './frontends/LogOut';
import ProductList from './frontends/ProductList';
import CheckOut from './frontends/CheckOut';
import Order from './frontends/Order';


function App() {
  if(localStorage.getItem("token")){
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Frondends/>}></Route>
        <Route path='/admin' element={<Backend/>}></Route>
        <Route path='/admin/service' element={<Backend/>}></Route>
        <Route path='/admin/services' element={<Backend/>}></Route>
        <Route path='/admin/product' element={<Backend/>}></Route>
        <Route path='/admin/products' element={<Backend/>}></Route>
        <Route path='/admin/user' element={<Backend/>}></Route>
        <Route path='/admin/users' element={<Backend/>}></Route>
        <Route path='/admin/services/:id/edit' element={<Backend action={{name: "service", update :true,delete:false}} condi={true}/>}></Route>
        <Route path='/admin/products/:id/edit' element={<Backend action={{name: "product", update :true,delete:false}} condi={true}/>}></Route>
        <Route path='/admin/services/:id/delete' element={<Backend action={{name:"service",update:false,delete:true}} condi={true}/>}></Route>
        <Route path='/admin/products/:id/delete' element={<Backend action={{name:"product",update:false,delete:true}} condi={true}/>}></Route>
        <Route path='/admin/users/:id/delete' element={<Backend action={{name:"user",update:false,delete:true}} condi={true}/>}></Route>
        <Route path='/logout' element={<LogOut/>}></Route>
        <Route path='/order' element={<Backend/>}></Route>
        <Route path='/order/detail/:id' element={<Backend action={{name:"order"}} condi={true}/>}></Route>
      </Routes>
      </BrowserRouter>
    
      
    );
  }else{
    return(
    <BrowserRouter>
     <div>
       <Routes>
        <Route path='/' element={<Frondends/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
     </div>
    </BrowserRouter>
    )
  }
 
}

export default App;
