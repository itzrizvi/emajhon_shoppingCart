import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;