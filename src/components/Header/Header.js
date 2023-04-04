import React from 'react';
import "./Header.css";
import img from "./camara.png";

    
const Header = () => {
    return (
        <div className='Header'>
            <h1>Users Api</h1>
            <img src={img} alt="camara" width="150px" />
        </div>
    );
};

export default Header;