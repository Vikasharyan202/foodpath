import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData?.info;
  return(
    <div className='res-card'>
      <img className='food-image' alt="foodImg" src={CDN_URL + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestaurantCard;