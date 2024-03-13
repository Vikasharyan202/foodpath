import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+ resId);

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // }

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info ;
  
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories)

  return(
    <div className="resMenu">
      <h3>{name}</h3>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      
      {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
      ))}
    </div>
  )
}
export default RestaurantMenu;