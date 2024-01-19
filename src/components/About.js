// import User from './User';
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1> About </h1>
      <h2> Inside About Us</h2>
      <div className="text-xl font-bold">
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      {/* <User name = {"Saurabh"} location = {"Pune Baner"}/> */}
      <UserClass name={"Saurabh From Class"} location={"Australia"} />
    </div>
  );
};

export default About;
