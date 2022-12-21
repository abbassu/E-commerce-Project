import React,{useState,useEffect} from "react";



const DEFULT_FILTER="title";

function FunctionalSearchFilter(props){

const [searchText,setsearchText]= useState("")
const [filterby,setfilterby]= useState("title")


async function onresetform(e){
    e.preventDefault();

    await  setsearchText("")
    await  setfilterby(DEFULT_FILTER)

    if('onChange' in props){
        props.onChange(searchText,filterby);
    }
}

async function onfilterselected(e){
    

   await setfilterby(e.target.value)

    if('onChange' in props){
        props.onChange(searchText,filterby);
    }
}

async function onSearchchange(e){

   await setsearchText(e.target.value)
   props.onChange(searchText,filterby);

}

return(

    <div className="row">
    <form className=" mt-4 ms-4 form-in-row">
        <div className="col-lg-6 col-md-3 d-flex">
            <div className="me-2 flex-grow-1" >
                <input type="text"
                value={searchText}
                onChange={onSearchchange}
                placeholder="Search"
                className="form-control"/>
            </div>
            <div className="me-2 flex-grow-2">

            <select 
            className="form-select"
            onChange={onfilterselected}
            value={filterby}>
                    <option value="title">By Title</option>
                    <option value="desc">By Description</option>
                    <option value="title-and-desc">By Title/Description</option>
                </select>
            </div>
            <div className="btn btn-secondary flex-grow-2" onClick={onresetform}>Reset</div>
        </div>
    </form>
</div>
)
}
export default FunctionalSearchFilter