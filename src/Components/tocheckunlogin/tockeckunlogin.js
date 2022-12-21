import React,{useContext} from "react";
import { GlobalContext } from "../../Utils/contex";
import { Navigate, useLocation } from "react-router-dom";
import { computeStyles } from "@popperjs/core";

function Tocheckloginis(props){
    const where =useLocation()
    console.log(" hereeeee :",where)
    const auth=useContext(GlobalContext).auth
    return(
        <div>
            {
                auth.token ? <Navigate to={where.state}/> : props.children
            }
        </div>
    )

}
export default Tocheckloginis