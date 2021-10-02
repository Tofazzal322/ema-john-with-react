// import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const Inventory = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1> Inventory working </h1>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Inventory;