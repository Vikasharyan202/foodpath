import { LOGO_URL, CART_URL } from "../utils/constant";
const Header = () => {
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
      </ul>
    </div>
  </div>
  )
}

export default Header;