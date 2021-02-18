import React from 'react';
import './searchbox.style.css';


export const SearchBox = ({placeholder, handleChnage}) => (
    <input 
        className="search" 
        type="search" 
        placeholder={placeholder} 
        onChange={handleChnage} />
)