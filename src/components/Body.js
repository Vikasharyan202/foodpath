import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {

  // Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setSearchedRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Note:  shimmer component didn't work properly, check again their implementation
  if(listOfRestaurants.length === 0){
    return <Shimmer/>
  }

  return(
    <div className='body'>
      <div className='search'>
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={() => {
            // Filter the restaurant name and changed the UI
            // res. name access from the search box
            const searchedRestaturant = listOfRestaurants.filter((res) => {
              return(
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )     
            })
            console.log(listOfRestaurants)
            setSearchedRestaurant(searchedRestaturant);
          }}>Search</button>

          <div className="filter">
            <button className="filter-btn" onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);

              setListOfRestaurants(filteredRestaurants);
            }}>Top Rated Restaurants</button>
          </div>
      </div>
      
      <div className='res-container'>
        {
          searchedRestaurant.map(restaurant => <Link key={restaurant.info.id} to={"/restaurantMenu/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>)
        }
        
      </div>
    </div>
  )
}
export default Body;
