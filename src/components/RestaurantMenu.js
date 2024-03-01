import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  console.log(resId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+ resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info ;
  console.log(resInfo);
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards)
  return(
    <div className="resMenu">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>)}
      </ul>
    </div>
  )
}
export default RestaurantMenu;