import React,{useContext} from "react";
import { GlobalContext } from "../../Utils/contex";
import { Navigate } from "react-router-dom";

function Tocheck(props){

    const auth=useContext(GlobalContext).auth
    return(
        <div>
            {
                auth.token ? props.children : <Navigate to={'/login'}/> 
            }
        </div>
    )

}
export default Tocheck