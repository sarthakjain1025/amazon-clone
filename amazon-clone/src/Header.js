import React from "react";
import logo from './images/head_logo.png'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <>
      <div className="header">
        <img className="header_logo" src={logo} alt="Logo"/>
      
      <div className="header_search">
        <input className="searchInput" type="text"></input >
        <SearchIcon />
     
        </div>
        <div className="header_nav">
          <div className="header_option">
            <span className="header_optionlineone">Hello Guest</span>
            <span className="header_optionlinetwo">Sign In</span>
          </div>

          <div className="header_option">
            <span className="header_optionlineone">Returns</span>
            <span className="header_optionlinetwo">Orders</span>
          </div>

          <div className="header_option">
            <span className="header_optionlineone">Your</span>
            <span className="header_optionlinetwo">Prime</span>
          </div>
          <div className="header_optionBasket">
            <span className="header_optionlinetwo header_">0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
