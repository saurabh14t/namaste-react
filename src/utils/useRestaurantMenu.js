import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API_URL}${resId}`); //&catalog_qa=undefined&submitAction=ENTER
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
