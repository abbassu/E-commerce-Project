import React, { useState } from 'react'
import {navStruct} from "./utils"
import {Link, useLocation} from "react-router-dom"
import { useEffect } from 'react'
import './ff.css'
import Logincard from '../../Pages/subcom/logincard'
function NavBar (){
    const [activeTap,setactive]=useState()
    const [navStructState,setnavs] = useState(navStruct)
    const location=useLocation()
    const ww=useLocation()

    // function onTabClicked(tabindex){
    //         let _navStructState= JSON.parse( JSON.stringify(navStructState))
    //         _navStructState = _navStructState.map((tab,ind) => {
    //         if(ind===tabindex){
    //             tab.isActive=true
    //         }
    //         else {
    //             tab.isActive=false
    //         }
    //         return tab
    //     }
    //         )
    //         setnavs(_navStructState)
    // }

    useEffect(()=>{
        console.log("in effect")
        console.log("location :",location)
        const _navStruct = navStructState.map((item) => {
            const _item = { ...item }
            console.log("link:",_item.link)
            console.log("location.pathnamr:",location.pathname)
            if (`${_item.link}` === location.pathname) {
                console.log("trurrrrrrr")
                _item.isActive = true;
            } else {
                _item.isActive = false;
            }
            return _item;
        })
        console.log("navstruct",_navStruct)
        setnavs(_navStruct);
    },[location])
    
    return (
        <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5 kk">
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#mainNavBar">
                <span className='navbar-toggler-icon' />
            </button>
            <div className="collapse navbar-collapse ddd" id="mainNavBar">
                <ul className="navbar-nav uull">
                    {navStructState.map((tab, idx) => {
                        
                        return (
                            tab.name ==='Login' ? <Logincard tab={tab} fullpath={location.state} /> :
                            <React.Fragment>
                            {/* <Link state={{ww.pathname,data:tab.data}} className="mt-1 ms-5 ppp" to={tab.link} key={idx}  > */}
                            <Link state={ww.pathname} className="mt-1 ms-5 ppp" to={tab.link} key={idx}  >
                                {console.log("ww.pathname : ","",ww.pathname)}
                                <li
                                    className='nav-item'
                                >
                                    <button
                                        className={`btn nav-link ${tab.isActive ? "active" : ""}`}
                                    // onClick={() => onTabClicked(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                </li>
                            </Link>
                            </React.Fragment>




                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default  NavBar 