import { LOGO_URL, CART_URL } from "../utils/constant";
import { useState } from "react";


const Header = () => {

  const[logBtn, setLogBtn] = useState("Log In");

  return(
    <div className='header'>
    <div className='logo-container'>
      <img className='logo' src={LOGO_URL}/>
    </div>
    <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li><img className='cart' src={CART_URL}/></li>
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