import RestuarantCard from './RestuarantCard';
import resList from '../utils/mockdata.js';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link  } from 'react-router-dom';

const Body = () => {
    //local state variables
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSeachText] = useState('');

    useEffect(()=>{
        //Fetch the data
        fetchData();
    },[])
    
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642382&lng=73.77694319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        //optional chanining

        setListOfRestaurants(jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional Rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? (<Shimmer />) :
    (<div className="body">
        <div className="filter">
            <div className='search'>
                <input type='text' className='search-box' value={searchText} onChange={(e)=>{setSeachText(e.target.value)}}/>
                <button onClick={()=>{
                    const filteredRes = listOfRestaurants.filter((res)=> {
                        return (res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    })
                    setFilteredRestaurants(filteredRes);
                }}>Search</button>
            </div>
            <button className='filter-btn' onClick={()=>{setListOfRestaurants(listOfRestaurants.filter((val)=> {return val.card.card.info.avgRating > 4.3}))}}> Top Rated Restaurants </button>
        </div>
        <div className="res-container">
            {
                filteredRestaurants.map((restuarantVal)=>{
                    return <Link key = {restuarantVal.info.id} to = {`/restaurants/${restuarantVal.info.id}`}> <RestuarantCard resData = {restuarantVal} /> </Link>
                })
            }
            {/* <RestuarantCard resData = {resList[0]} />
            <RestuarantCard resData = {resList[1]} /> */}
            {/* <RestuarantCard resName="Pizza Hut" cuisine = "Pizza" resStar="4.3" resTime = "25 min" /> */}
        </div>
    </div>)
}


export default Body;