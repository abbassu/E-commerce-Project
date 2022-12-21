import React,{useEffect,useState} from "react";
import { Fetchdata } from "../../Utils/Apiutils";

function Forapi (){

    async function getfetche(){
        const resp= await Fetchdata("http://api.openweathermap.org/data/2.5/forecast?q=Nablus&cnt=8&units=metric&appid=8262bf24ec10f2f145746cdfd3d68631 ",'GET')
        if(resp.status ===200){
                console.log(resp.data)
        }
        else{
            console.log("this http is feild")
        }

    }
    useEffect( () => {
        getfetche()
      }, []);
    return (
<div>abbas</div>
    )

}

export default Forapi