
import './App.css';
import Frondends from './frontends/Frondends';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Backend from './backends/Backend';
import Login from './frontends/Login';
import LogOut from './frontends/LogOut';

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

      </Routes>
      </BrowserRouter>
    
      
    );
  }else{
    return(
    <BrowserRouter>
     <div>
       <Routes>
        <Route path='/' element={<Frondends/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
     </div>
    </BrowserRouter>
    )
  }
 
}

export default App;
