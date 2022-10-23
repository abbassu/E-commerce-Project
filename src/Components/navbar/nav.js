import React from 'react'
import {navStruct} from "./utils"

class NavBar extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            activeTap:[true,false,false],
            navStructState: navStruct
        }
    }

    onTabCliked(tabindex){

            let _navStructState= JSON.parse( JSON.stringify(this.state.navStructState))

            _navStructState = _navStructState.map((tab,ind) => {

            if(ind===tabindex){
                tab.isActive=true
            }
            else {
                tab.isActive=false
            }
            return tab
        }
            )

            this.setState({
                navStructState :_navStructState
            })
    }
    render(){
        return(
            <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5 ">

                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#mainNavBar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='mainNavBar'>
                <ul className="navbar-nav">
                    

                    {this.state.navStructState.map((tab,idx) => {
                        return(
                            <li className='nav-item ms-3'
                                key={idx}
                            >
                                <button className={` btn nav-link ${tab.cssClass} ${tab.isActive ? " active" : ""} `}
                                onClick={this.onTabCliked.bind(this,idx)}
                                >
                                    {tab.name}
                                </button>
                            </li>
                        )
                    })}



                </ul>
                </div>

            </div>
        )
    }
}


export default  NavBar 