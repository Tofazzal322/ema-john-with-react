import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>

            </div>
            <div>
                <h4 className="product-name"> {name}</h4>
            <p>Price: { price}</p>
            <p>Price: {quantity}</p>
            </div>
            <button onClick={handleRemove} className="btn-regular" > Remove</button>
        </div>
    );
};

export default ReviewItem;