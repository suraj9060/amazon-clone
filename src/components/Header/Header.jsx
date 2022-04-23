import React from 'react'
import "./header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";



const Header = ({ cart }) => {
  return (
    <>
      <div className="header">
        <a href="/">
          <img
            src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
            className="header__logo"
            alt="logo"
          />
        </a>
        <div className="header__search">
          <input type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionone">Hello custumer</span>
            <span className="header__optiontwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionone">Return</span>
            <span className="header__optiontwo">& Order</span>
          </div>
          <div className="header__option">
            <span className="header__optionone">Your</span>
            <span className="header__optiontwo">Prime</span>
          </div>

          <div className="header__optionBasket">
            {/* <Link to="/cart">hello</Link> */}
            <a href="/cart">
              <ShoppingBasketIcon className="header__basket" />

              <span>{cart?.total_items}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <ul>
          <li>all</li>
          <li>Mobile</li>
          <li>Category</li>
          <li>computer</li>
          <li>Cloths</li>
          <li>Shoes</li>
          <li>Electronic</li>
          <li>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/BachanPandey/400x39-SWM_179._CB623270002_.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header