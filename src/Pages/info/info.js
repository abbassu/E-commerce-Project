import React from "react";
import { useSearchParams } from "react-router-dom";
import { WithRout } from "../../Utils/Higherordercomponent";

class Info extends React.Component{
    

    
    render(){
        // console.log(this.props)
        return(
            // <div> {this.props.params[0].get('data')} </div>
            <div>infooo</div>
        )
    }
}
export default WithRout(Info)