import { computeStyles } from "@popperjs/core";
import React from "react";
import { useState,useContext } from "react";
import { GlobalContext } from "../../Utils/contex";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login  (){

    const [username,setuser]=useState("")//// i will put wmpty string here because if value take undefine it will make some problems =>will be  value instead value={}
    const [pass,setpass]=useState("")
    const auth=useContext(GlobalContext).auth;
    const navigate =useNavigate()
    const [dis,setdis]=useState(false)

    async function onFormsubmit(e){
        e.preventDefault()
        console.log(username,pass)
        setdis(!dis)
        const resp = await auth.singin(username,pass) 
        if(resp.status===200){
            navigate("/");
        }
        else{
            alert("wrong password")
            setdis(false)
        }
    
    }
    return(
        <div className="container mt-4">
            <form onSubmit={onFormsubmit}>
        <div className="ff">
            <label htmlFor="" className="form-lable ll">user name</label>
            <input type="text" className="form-control" name="" id="" value={username} onChange={(e)=>{
setuser(e.target.value)
            }}/>
        </div>
        <div className="ff">
            <label htmlFor="" className="form-lable ll">password</label>
            <input type="password" className="form-control" name="" value={pass} id="" onChange={(e)=>{
setpass(e.target.value)
            }} />
        </div >
        <div className="ff"> 
        <button className="mt-3 btn btn-primary ll" disabled={dis}> Login </button>
        </div>
        
            </form>
        </div>
    )
}
export default Login