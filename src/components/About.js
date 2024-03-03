import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
  constructor(props){
    super(props);

    // console.log("Parent Constructor")
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }

  render(){
    // console.log("Parent Render");
    return(
      <div className="about">
        <h1>This is the about section of foodpath </h1>
        <h2>you can know everything about us</h2><hr/>
    
        <UserClass name="Vikash from(class)" Location="Gandhi maidan, Patna" />
      </div>
    )
  }
}

export default About;