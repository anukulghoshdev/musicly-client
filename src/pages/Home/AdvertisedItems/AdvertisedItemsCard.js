import React from 'react';
import './AdvertisedItems.css'
const AdvertisedItemsCard = ({product}) => {
    const {product_pic, product_name, original_price, years_of_use} = product
    return (
        <div className="card">
            <img className="product--image" src={product_pic} alt="" />
            <h2 className='text-black font-semibold'>{product_name}</h2>
            <p className="price">{original_price}</p>
            <p>{years_of_use}</p>
            <p>
                <button>Book Now</button>
            </p>
        </div>
    );
};

export default AdvertisedItemsCard;