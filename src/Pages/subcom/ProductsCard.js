import React from "react";


function ProductsCard( {product,onClick} ){
    
    

    function onProductCardClick(){
        
        if(typeof onClick ==="function"){
            onClick(product);//////////////
        }
    }
    
    
    return(
        <div 
        onClick={onProductCardClick}        
        className="product-card">
            <div className="product-img-wrapper">
                <img src={product.image}
                alt={product.title}
                className="product-img" />
            </div>

            <div className="product-card-body">
                <h6 className="product-card-title" title={product.title}>
                    {product.title}
                </h6>
                <div className="product-card-desc" title={product.description}>
                    {product.description}
                </div>
            </div>

        </div>
    )


}export default ProductsCard;