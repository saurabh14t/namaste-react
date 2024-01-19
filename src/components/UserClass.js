import React from "react";
import { json } from "react-router-dom";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Saurabh",
        location: "Dummy LOcation",
      },
    };
  }

  async componentDidMount() {
    //API Calls
    console.log("componentDidMount");
    const data = await fetch("https://api.github.com/users/saurabh14t");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {
    //Called at the en
    console.log("componentDidUpdate");
  }

  //componentWillUnmount will be called when compoent is unmounted. For eg if we go to some another page from a page.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { location, login } = this.state.userInfo;
    // const {count} = this.state;
    return (
      <div className="user-card">
        {/* <h1> Count :- {count}</h1> */}
        {/* <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count Increase</button> */}
        <h2>Name - {login}</h2>
        <h3>Location - {location}</h3>
        <h3>Contact - 9971480365</h3>
      </div>
    );
  }
}

export default UserClass;
