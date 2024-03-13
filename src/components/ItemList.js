import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return(
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="card-details">  
          <div>
            <div className="card-details-inner">
              <span>{item.card.info.name}</span><br/>
              <span> ₹ - {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            </div>
            <p >{item.card.info.description}</p>
          </div>
          <div className="item-image">
          <div className="btn-image">
            <button onClick={ () => handleAddItem(item)}>Add+</button>
          </div>
          <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    
    </div>
  )
}

export default ItemList;