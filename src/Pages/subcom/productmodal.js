import React from "react";
import Rate from "react-rating-stars-component"
import Price from 'react-price';

function ProductModal({product}){

    return (
        <div className="product-details-modal">
            <div className="details-img-wrapper">
                <img src={product.image}
                alt={product.title}
                className="details-img" />

            </div>
            <div className="details-rate-wrapper">
                <div className="details-rate">
                    <Rate 
                    value={product.rating.rate}
                    size={30}
                    edit={false}
                    />
                </div>
                <div> | </div>
                <div className="review-cout"> {product?.rating?.count}</div>

                <div className="details-descriptions">
                    {product.description}
                </div>
            </div>
            {/* Detail Modal Compppppp */}
        </div>
    )
}
export default ProductModal