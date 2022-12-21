import React,{useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Utils/contex";
import './../../Components/navbar/ff.css'
import './cardlogin.css'

function Logincard({tab,fullpath}){

    const auth = useContext(GlobalContext).auth
    const navigate=useNavigate()

function onLoginout(){
    if(auth?.user){
        auth.signout();
    }

    navigate('/login')
}
    return(

        // <Link className={tab.cssClass} to={tab.link}  state={fullpath} >
        <div className="man">
       <li
           className='nav-item'
           onClick={onLoginout}
       >

<button
                        className={`btn nav-link  ${auth?.user ? "" : "active"}`}>
{
    auth.user ?
<React.Fragment>

                        <span className="hh me-4"> {`Welcome ${auth?.user?.name} `}</span>
                        <div className="btn btn-info hhh"> Logout</div>
               
</React.Fragment> : tab.name
}

</button>           

       </li>
        </div>


//    </Link>
    )

}
export default Logincard