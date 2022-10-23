import { computeStyles } from "@popperjs/core";
import React from "react";
import {Fetchdata} from "../../Utils/Apiutils"
import ProductsCard from "../subcom/ProductsCard";
import './pro.scss'
class Product extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }


    async componentDidMount(){
        const resp= await Fetchdata("https://fakestoreapi.com/products",'GET')
        console.log("dddddddd" +resp.data.title)
        if(resp.status ===200){
            this.setState({
                products:resp.data
            })
        }
        else{
            console.log("this http is feild")
        }
    }

    render(){
        return(
            <div>
                <div className="row ms-5 me-5">
                    {this.state.products.map((item,index)=>{
                        
                        return(
                            <div className="col-lg-2 mx-5 " key={index}>
                                <ProductsCard product={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Product;