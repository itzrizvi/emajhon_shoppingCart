import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    const priceReducer = (previous, current) => {
        return !current.quantity ? previous + current.price : previous + current.price * current.quantity;

    }
    const totalPrice = cart.reduce(priceReducer, 0);

    const itemNumbers = (previous, current) => {
        current.quantity = !current.quantity ? 1 : current.quantity;
        return previous + current.quantity;
    }
    const totalItem = cart.reduce(itemNumbers, 0);


    let shipping = 0;
    if (totalPrice) {
        shipping = 15;
    }

    const tax = (totalPrice + shipping) * 0.10;

    const grandTotal = totalPrice + shipping + tax;

    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered: {totalItem}</h3>
            <h3>Total Price: {totalPrice.toFixed(2)}</h3>
            <h3>Shipping and Handling: {shipping}</h3>
            <h3>Tax: {tax.toFixed(2)}</h3>

            <h2>Grand Total: {grandTotal.toFixed(2)}</h2>

        </div>
    );
};

export default Cart;