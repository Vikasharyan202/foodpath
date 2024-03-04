import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count : 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      }
    };
    // console.log("Child Constructor");
  }

  increaseCount = () => {
    this.setState({count:this.state.count + 1})
  }

  async componentDidMount(){
    // console.log("Child Component Did Mount");
    // API call
    const data = await fetch("https://api.github.com/users/Vikasharyan202");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render(){
    // const{name, Location} = this.props;
    const{name, location, avatar_url} = this.state.userInfo;
    // console.log("Child Render");
    return(
      <div className="user-card">
        <img src={avatar_url} alt=""/>
        <h2>Name: {name} </h2>
        <h3>Location: {location} </h3>
        <h3>Contact: @aryan2002</h3>
        <button onClick={this.increaseCount}>count: {this.state.count} </button>
      </div>
    )
  }
}
export default UserClass;