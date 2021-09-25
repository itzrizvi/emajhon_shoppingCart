import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, price, seller, stock, img, star } = props.product;
    const icons = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className='product'>
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="details">
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <p>By: {seller}</p>
                    <p>Only {stock} left in stock - Order Soon</p>

                    <Rating
                        readonly
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        initialRating={star}
                    ></Rating>
                    <br />
                    <br />
                    <button className='cart-button' onClick={() => props.addtoCartHandler(props.product)}>{icons} Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;