import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // useEffect(()=>{
  //    console.log("use Effect called");
  // },[])

  //Subcribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-red-100 sm:bg-cyan-100 lg:bg-yellow-50">
      <div className="logo-containet">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 font-bold ">
          <li className="px-4 hover:bg-gray-100">
            Online Status :- {onlineStatus ? "Green" : "Red"}
          </li>
          <li className="px-4 hover:bg-gray-100">
            <Link to={"/"}>Home </Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us </Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact US </Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4">{" " + loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
