import React from "react";


function ProductsCard( {product} ){
    return(
        <div>
            <div className="product-img-wrapper">
                <img src={product.image}
                alt={product.title}
                className="product-img" />
            </div>

            <div className="product-card-body">
                <h6 className="product-card-title">
                    {product.title}
                </h6>
                <div className="product-card-desc">
                    {product.description}
                </div>
            </div>

        </div>
    )


}export default ProductsCard;