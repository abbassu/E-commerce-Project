
import './App.css';
import "bootstrap"
import "bootstrap/scss/bootstrap.scss"
import NavBar from './Components/navbar/nav';
import "./App.css"
import Product from './Pages/Product/Product.js'; 
import "./style/mixnis.scss"
import CustomModal from './Components/CustomModal/CustomModal';
import { GlobalContext } from './Utils/contex';
import {Modal} from 'bootstrap';
import React from 'react';
import Funproduct from './Pages/Product/functionalproduct';
import Cati from './Pages/cat/cati';
import {BrowserRouter, Route, RouterProvider, Routes,createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Login from './Components/login/login';
import Layout from './Components/Layout/lay';
import PageNotFound from './Pages/pagenotfound/pagenotfound';
import Erron from './Pages/testerror/testerror';
// import Forapi from './Pages/tete/Forr';
import { Fetchdata } from './Utils/Apiutils';
import { Returnobject } from './Utils/ret_obj_imgwithname';
import Tocheck from './Components/tocheck/tocheck';
import Tocheckloginis from './Components/tocheckunlogin/tockeckunlogin';
import Info from './Pages/info/info';




class App extends React.Component {
    render(){
      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route element ={<Layout/>}  errorElement={<PageNotFound/>} >
            <Route path ='/' element={
        
              <Tocheck>
                <Cati/>
               </Tocheck>
            
            } 
            loader ={
            async ()=>{
              console.log("in app")
              const resp= await Fetchdata("https://fakestoreapi.com/products/categories",'GET')
              const tt=Returnobject(resp.data)
              return tt
              }
            }/>
              <Route path ='/product' element={
              <Tocheck>
                <Funproduct />
               </Tocheck>
              } />
              <Route path ='/login' element={ 
                <Tocheckloginis>
              <Login/>
                 </Tocheckloginis>
            } 
              
              />
              {/* <Route path='*' element ={<PageNotFound/>}/> */}
              <Route path='/info' element={
               <Tocheck>
              <Info/>

               </Tocheck>
              
              }/>
            </Route>
        )
      );

return <RouterProvider router={router} />

    }
  }
  export default App;