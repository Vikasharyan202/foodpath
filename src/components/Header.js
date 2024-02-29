import { LOGO_URL, CART_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  const[logBtn, setLogBtn] = useState("Log In");

  return(
    <div className='header'>
    <div className='logo-container'>
      <img className='logo' src={LOGO_URL}/>
    </div>
    <div className='nav-items'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link> </li>
        <li><Link to="/cart"><img className='cart' src={CART_URL}/></Link></li>
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