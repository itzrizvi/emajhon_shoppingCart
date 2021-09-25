import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });

    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedProduct = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedProduct.push(addedProduct);
                }

            }
            setCart(storedProduct);
        }
    }, [products]);


    const handleAddtoCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        // Save to Local Storage
        addToDb(product.key);
    }

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    name=""
                    id="search"
                    placeholder="Search Product..." />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h3>Products:</h3>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            addtoCartHandler={handleAddtoCart}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;