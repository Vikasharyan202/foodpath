import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";



const Body = () => {

  // Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.6073388&lng=85.1362679");

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
  }

  return(
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);

          setListOfRestaurants(filteredRestaurants);
        }}>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {
          listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
        
      </div>
    </div>
  )
}
export default Body;