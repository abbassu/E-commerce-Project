import React,{useEffect,useState} from "react";
import {Fetchdata} from "../../Utils/Apiutils"
import { Returnobject } from "../../Utils/ret_obj_imgwithname";
import {Link, useLoaderData} from "react-router-dom"

let f="ffff"
function Cati(){
    console.log("in catti")
    // let tt=[]
    const [products,setproducts]=useState([])
    const category = useLoaderData()
    const [filterproducts,setfilterproducts] =useState([])


    // async function getfetche(){
    //     const resp= await Fetchdata("https://fakestoreapi.com/products/categories",'GET')
    //     // console.log("dddddddd" +resp.data.title)
    //     if(resp.status ===200){
    //             setproducts(resp.data)
    //             setfilterproducts(resp.data)  
    //     }
    //     else{
    //         console.log("this http is feild")
    //     }
    //     tt=Returnobject(resp.data)
    //     console.log("tt is :",tt)
    //     setfilterproducts(tt)
    // }

    useEffect( () => {
        setfilterproducts(category)  
      }, []);

    return(
        <div>
                <div className="row ms-5 me-5 mt-3" >
                    {filterproducts.map((item,index)=>{
                        return(
                            <div key={index} className={"card container my-5"}>
                                <div className="card-img-overlay d-flex justify-content-center align-item-center">
                                <Link to={`/product?data=${item.name}`} state={{data:item.name}}  > {item.name} </Link>
                                </div>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })}
                </div>
        </div>
    )



}

export default Cati



