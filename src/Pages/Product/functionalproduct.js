import React, { useContext, useState,useEffect } from "react";
import { GlobalContext } from "../../Utils/contex";
import SearchFilter from "../subcom/searchfilter";
import {Fetchdata} from "../../Utils/Apiutils"
import ProductsCard from "../subcom/ProductsCard";
import './pro.scss'
import CustomModal from "../../Components/CustomModal/CustomModal";
import {Modal} from 'bootstrap';
import {useLocation, useSearchParams} from "react-router-dom"

import ProductModal from "../subcom/productmodal";

function Funproduct (){
    const [q,sq]=useSearchParams()
    const [products,setproducts]=useState([])
    const [filterproducts,setfilterproducts] =useState([])
    const location=useLocation()
    // const [cat,setcat]=useState(q.get("data"))
    // console.log("ffffffffff",cat)
    const globalcontext = useContext(GlobalContext)
    // 
    async function getfetche(){
        console.log("lovcatgion,,, : ",location)
        const cat=q.get("data")
        console.log("cat : ",cat)
        let resp=""
        if(!cat ){
            console.log("ffffffffffjjjjj")
            resp= await Fetchdata("https://fakestoreapi.com/products",'GET')
            
        }
        else{
            resp= await Fetchdata(`https://fakestoreapi.com/products/category/${q.get("data")}`,'GET')
        }
        if(resp.status ===200){
                setproducts(resp.data)
                setfilterproducts(resp.data)  
        }
        else{
            console.log("this http is feild")
        }
    }

    // useEffect( () => {
    //     getfetche()
    // }, []);

    useEffect( () => {
        getfetche()
    }, [location]);

    function onsearchfilterchange (searchtext,filterby){

        const _searchtext=searchtext.toUpperCase()
        const _filteredProduct= products.filter((item)=>{
        const _uppercasetitle= item.title.toUpperCase()
        const _uppercasedesc= item.description.toUpperCase()

            if(filterby==="title")return _uppercasetitle.includes(_searchtext)
            else if(filterby==="desc"){
                return _uppercasedesc.includes(_searchtext)
            }
            else{
                return _uppercasetitle.includes(_searchtext) || _uppercasedesc.includes(_searchtext) 
            }
        })

        // this.setState({
        //     filterproducts:_filteredProduct
        // })
        setfilterproducts(_filteredProduct)

    }

    function onCardClicked(_product){
        // this.setState({
        //     productdetails:_product
        // },()=>{
        //     const custommodal= new Modal ('#custommodal')
        //     custommodal.show();
        // })
console.log("_product.title",_product.title)
globalcontext.showModal({
    
    body: <ProductModal product={_product}/>,
    // body: <span> { _product.body } </span>,
    title: <span>{_product.title}</span>,
    footer: <span> Footer </span>,
})

    }


return(
            <div>

                <SearchFilter  onChange={onsearchfilterchange}/>
                <div className="row ms-5 me-5 mt-3" >
                    {filterproducts.map((item,index)=>{
                        return(
                            <div className="col-lg-2 mx-4 col-md-3" key={index}>
                                <ProductsCard 
                                onClick={onCardClicked}
                                product={item}/>
                            </div>
                        )
                    })}
                </div>

            </div>
    )

}
export default Funproduct