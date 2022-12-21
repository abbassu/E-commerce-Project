import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/nav";
import { GlobalContext } from "../../Utils/contex";
import CustomModal from "../CustomModal/CustomModal";
import { useRef } from "react";
import {Modal} from 'bootstrap'
import { Fakelogin } from "../../Utils/Apiutils";

function Layout(){


    const [modalData, setModalData] = useState({
        body: "",
        title: "",
        footer: ""
    });
    const storeduser=JSON.parse(localStorage.getItem('user'))
    const storedtoken=localStorage.getItem('token')
    const [user, setUser] = useState(storeduser);
    const [token, setToken] = useState(storedtoken);
    const auth = {
    user,
    token,
    singin: async (username,password)=>{
      const resp= await Fakelogin(username,password)
      if(resp.status===200){
        setUser(resp.user)
        console.log("aaaaaaaaaaaaaaaaaaaaaaa:" + JSON.stringify(resp.user))
        setToken(resp.token)
        //localStorage.setItem("key,value")
        
        localStorage.setItem('user',JSON.stringify(resp.user))
        localStorage.setItem('token',resp.token)
      }
      return resp
    
    },
    signout:()=>{
      setUser("");
      setToken("");
      localStorage.clear()
    }
  }
    const modal = useRef();


    useEffect(() => {
        modal.current = new Modal('#customModal');
    }, [])

    const showModal = (options) => {
        console.log("body:",options.body ,"title",options.title,"footer",options.footer)
        setModalData({
            body: options.body,
            title: options.title,
            footer: options.footer
        })
        modal.current.show();
    }

   return(
    <GlobalContext.Provider value={{showModal,auth}}>
    <div className='App'>
        <CustomModal 
        title={modalData?.title}
        body={modalData?.body}
        footer={modalData?.footer}
    />
  <NavBar  />
  <Outlet/>
  </div>
          </GlobalContext.Provider>
   )

}

export default Layout



// +++++++++++++++++++++++++++++\
// import React from 'react';
// import { useRef } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Modal } from 'bootstrap';
// import CustomModal from '../CustomModal/CustomModal'
// import NavBar from '../NavBar/NavBar';
// import { GlobalContext } from '../../Utils/Contexts';
// import { FakeLoginApi } from '../../Utils/ApiUtils';

// function Layout() {

//     const [modalData, setModalData] = useState({
//         body: "",
//         title: "",
//         footer: ""
//     });

//     const modal = useRef();

//     const [user, setUser] = useState('');
//     const [token, setToken] = useState('');

//     useEffect(() => {
//         modal.current = new Modal('#customModal');
//     }, [])
//     const showModal = (options) => {
//         setModalData({
//             body: options.body,
//             title: options.title,
//             footer: options.footer
//         })
//         modal.current.show();
//     }



//     return (
//         <GlobalContext.Provider value={{ showModal, auth }}>
//             <div className="App">
//                 <CustomModal
//                     title={modalData?.title}
//                     body={modalData?.body}
//                     footer={modalData?.footer}
//                 />
//                 <NavBar />
//                 <Outlet />
//             </div>
//         </GlobalContext.Provider >)
// }

// export default Layout;