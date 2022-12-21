// import { computeStyles } from "@popperjs/core";
// import React from "react";
// import {Fetchdata} from "../../Utils/Apiutils"
// import ProductsCard from "../subcom/ProductsCard";
// import './pro.scss'
// import SearchFilter from "../subcom/searchfilter";
// import CustomModal from "../../Components/CustomModal/CustomModal";
// import {Modal} from 'bootstrap';
// import { GlobalContext } from "../../Utils/contex";
// import ProductModal from "../subcom/productmodal";

// class Product extends React.Component {

//     constructor(props){
//         super(props)
//         this.state={
//             products:[],
//             filterproducts:[],
//         }
//     }


//     async componentDidMount(){
//         const resp= await Fetchdata("https://fakestoreapi.com/products",'GET')
//         console.log("dddddddd" +resp.data.title)
//         if(resp.status ===200){
//             this.setState({
//                 products:resp.data,
//                 filterproducts:resp.data  
//             })
//         }
//         else{
//             console.log("this http is feild")
//         }
//     }

//     onsearchfilterchange (searchtext,filterby){

//         const _searchtext=searchtext.toUpperCase()
//         const _filteredProduct= this.state.products.filter((item)=>{
//         const _uppercasetitle= item.title.toUpperCase()
//         const _uppercasedesc= item.description.toUpperCase()

//             if(filterby==="title")return _uppercasetitle.includes(_searchtext)
//             else if(filterby==="desc"){
//                 return _uppercasedesc.includes(_searchtext)
//             }
//             else{
//                 return _uppercasetitle.includes(_searchtext) || _uppercasedesc.includes(_searchtext) 
//             }
//         })
//         console.log("aaaaAA");


//         this.setState({
//             filterproducts:_filteredProduct
//         })

//     }

//     onCardClicked(_product){
//         // this.setState({
//         //     productdetails:_product
//         // },()=>{
//         //     const custommodal= new Modal ('#custommodal')
//         //     custommodal.show();
//         // })

//         this.context.showModal({
//             body: <ProductModal product={_product}/>,
//             // body: <span> { _product.body } </span>,
//             title: <span>{_product.title}</span>,
//             footer: <span> Footer </span>,
//         });
//     }

//     render(){
//         return(
//             <div>
//                 {/* <CustomModal product={this.state.productdetails}/> */}
//                 <SearchFilter  onChange={this.onsearchfilterchange.bind(this)}/>
//                 <div className="row ms-5 me-5 mt-3" >
//                     {this.state.filterproducts.map((item,index)=>{
//                         return(
//                             <div className="col-lg-2 mx-4 col-md-3" key={index}>
//                                 <ProductsCard 
//                                 onClick={this.onCardClicked.bind(this,item)}
//                                 product={item}/>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }
// Product.contextType=GlobalContext
// export default Product;