import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
function Header() {
  return (
  <div className='header'>
      <Link to="/">
      <img 
         className="header_logo" 
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
         </Link>
      <div 
         className="header_search" >
             <input
             className="header_searchInput"
             type="text" />
             <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
          <Link to='/login'>
          <div className="header_option">
              <span
              className="header_optionLineOne">Hello Guest</span>
              <span
              className="header_optionLineTwo">Sign In</span>
          </div>
          </Link>
          <div className="header_option">
             <span
              className="header_optionLineOne">Returns</span>
               <span
               className="header_optionLineTwo">Orders</span>   
          </div>
          <div className="header_option">
             <span
              className="header_optionLineOne">Your</span>
               <span
              className="header_optionLineTwo">Prime</span>
          </div>
          <div className="header_optionBasket">
           <ShoppingCartIcon />
           <span className='header_optionLineTwo header_optionLineOne'>0</span>
          </div>
      </div>
  </div>
  );
}

export default Header;
