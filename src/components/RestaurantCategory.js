import ItemList from "./ItemList";
import { useState } from "react";



const RestaurantCategory = ({data}) => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData)
  }
  
  return(
    <div>
      {/* create Accordian : Accordian Header & Accordian Body */}
      <div className="item-category">
        <div className="item-category-details" onClick={handleClick}>
        <span>{data.title} - ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        {showData && <ItemList items={data.itemCards}/>}
      </div>
      
    </div>
  )
}

export default RestaurantCategory;