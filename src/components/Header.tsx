import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState('login')
  return (
    
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>ABOUT</li>
          <li>CART</li>
          <button className="login-btn" onClick={() => {
            btnName === 'login' ? setBtnName('logout') : setBtnName('login')
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
