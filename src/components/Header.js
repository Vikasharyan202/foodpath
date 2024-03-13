import { LOGO_URL, CART_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UseSelector, useSelector } from "react-redux";

const Header = () => {

  const[logBtn, setLogBtn] = useState("Log In");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return(
    <div className='header'>
    <div className='logo-container'>
      <img className='logo' src={LOGO_URL}/>
    </div>
    <div className='nav-items'>
      <ul>
        <li>Online Status:{onlineStatus === true?"✅":"🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link> </li>
        <li><Link to="/cart"><div className="cart"><img className='cart-image' src={CART_URL} /><p className="cart-text">{cartItems.length}</p></div></Link>
        </li>
        
        <button className="btn"
        onClick={() => {
          logBtn === "Log In"? setLogBtn("Log Out"): setLogBtn("Log In");
        }}
        >{logBtn}</button>
      </ul>
    </div>
  </div>
  )
}

export default Header;