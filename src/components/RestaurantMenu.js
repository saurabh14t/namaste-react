import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu =  async () =>{
        const data = await fetch (`
        https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5788913&lng=73.7706807&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData.data);
    }

    if(resInfo === null) return ( <Shimmer /> );

    const { name, cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

    return (<div className='menu'>
            <h1> {name}</h1>
            <p> {cuisines.join(', ')} - {costForTwoMessage} </p>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((item)=> {
                 return <li key = {item.card.info.id}> {item.card.info.name} - {"Rs "}- {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            })}
               
            </ul>
        </div>)
}

export default RestaurantMenu;