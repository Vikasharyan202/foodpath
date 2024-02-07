
import './App.css';

const Header = () => {
  return(
    <div className='header'>
    <div className='logo-container'>
      <img className='logo' src='https://media.istockphoto.com/id/1156053620/vector/restaurant-logo.jpg?s=612x612&w=0&k=20&c=dC6ICQsgBuhi8-MG0bjtHVn7Scm0rFPVnQ-_ygRTmRY='/>
    </div>
    <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li><img className='cart' src='https://static.vecteezy.com/system/resources/thumbnails/000/538/499/small/shopping_cart-01.jpg'/></li>
      </ul>
    </div>
  </div>
  )
}

const RestaurantCard = (props) => {
  const {resName, cuisines, rating, price} = props;
  return(
    <div className='res-card'>
      <img className='food-image' src='https://www.nestleprofessional.in/sites/default/files/2022-07/Fried-Rice.jpg'/>
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{price}</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard resName="Vikash Foods" 
                        cuisines="Dal Fry, Bihari, Indian"
                        rating="4.9 star"
                        price="150 for two"
        />
        <RestaurantCard resName="Aryan Foods" 
                        cuisines="Rice Fry, Bihari, Indian"
                        rating="4.8 star"
                        price="180 for two"/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const App = () => {
  return(
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}

export default App;







