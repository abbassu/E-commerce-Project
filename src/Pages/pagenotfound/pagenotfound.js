import React from "react";
import {Link, useRouteError} from 'react-router-dom'
import './page.css'

function PageNotFound(){
    const err=useRouteError()
    console.log("errorrrr: " ,err)
    return (
        <div className="page-not-found">

        <div className="wrapper">
            <div className="text-title">
                {err.status === 404 ? <span> Sorry, 404 Page Not Found... </span> : <span> Sorry, Something went wrong </span> }
               
            </div>
            <Link to={"/"} className="text-body btn btn-light" > Return to home page</Link>
        </div>
        </div>

    )
}
export default PageNotFound