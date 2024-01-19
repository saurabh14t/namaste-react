// import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API_URL } from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  // useEffect(()=>{
  //     fetchMenu();
  // }, []);

  // const fetchMenu =  async () =>{
  //     const data = await fetch (`${MENU_API_URL}${resId}`); //&catalog_qa=undefined&submitAction=ENTER
  //     const jsonData = await data.json();
  //     console.log(jsonData);
  //     setResInfo(jsonData.data);
  // }

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  //type.googleapis.com/swiggy.presentation.food.v2.ItemCategory

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* <h2>Menu</h2>
            <ul>
            {itemCards.map((item)=> {
                 return <li key = {item.card.info.id}> {item.card.info.name} - {"Rs "}- {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            })}
               
            </ul> */}
      {/* Accordian */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
