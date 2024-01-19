import RestuarantCard, { withPromotedLabel } from "./RestuarantCard";
import resList from "../utils/mockdata.js";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local state variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSeachText] = useState("");

  const RestuarantCardPromoted = withPromotedLabel(RestuarantCard);

  useEffect(() => {
    //Fetch the data
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642382&lng=73.77694319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    //optional chanining

    setListOfRestaurants(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //     return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are Offline</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSeachText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-600 m-4 rounded-lg text-cyan-100"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-blue-600 m-4 rounded-lg text-cyan-100"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((val) => {
                  return val.info.avgRating > 4.3;
                })
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restuarantVal) => {
          return (
            <Link
              key={restuarantVal.info.id}
              to={`/restaurants/${restuarantVal.info.id}`}
            >
              {restuarantVal.info.promoted != true ? (
                <RestuarantCardPromoted resData={restuarantVal} />
              ) : (
                <RestuarantCard resData={restuarantVal} />
              )}
            </Link>
          );
        })}
        {/* <RestuarantCard resData = {resList[0]} />
            <RestuarantCard resData = {resList[1]} /> */}
        {/* <RestuarantCard resName="Pizza Hut" cuisine = "Pizza" resStar="4.3" resTime = "25 min" /> */}
      </div>
    </div>
  );
};

export default Body;
