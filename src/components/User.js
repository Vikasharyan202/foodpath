import { useState } from "react";

const User = (props) => {
  const{name, Location} = props;
  const[count, setCount] = useState(0);

  const counting = () => {
    setCount(count + 1);
  }

  return(
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location:{Location} </h3>
      <h3>Contact: @aryan2002</h3>
      <button onClick={counting}>Count =  {count} </button>
    </div>
  )
}
export default User;