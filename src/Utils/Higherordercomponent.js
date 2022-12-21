import React, { useState } from "react";
import { useSearchParams,useLocation } from "react-router-dom";

export function WithRout(Mycomponent){

    return function Comp(props) {

        const params = useState();
        //const lll = useLocation()
        

        return <Mycomponent {...props} />
    }
 
    

}