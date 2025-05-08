
import { useEffect, useState } from "react"
import resList from "../utils/mockdata"
import RestaurantCard from "./RestauarantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
const Body = () =>{
 
 
  const [listOfRestaurants,setListOfRestaurants]=useState([])
  const [filterRes,setFilterRes]=useState([])
  const[searchText,setSearchText]=useState('')
  useEffect(()=>{
   fetchData()
    

  },[])
  const fetchData= async()=>{

    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.026769&lng=76.9057724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json =await data.json();

    setListOfRestaurants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilterRes(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 
    
  }
  

  return listOfRestaurants.length===0 ?<Shimmer/>:  (
    <div className="body">
      <div className="filter">
       <div className="search-box">
        <input type="text" className="search-text" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
<button className="search-btn" onClick={()=>{
  const filterRes=listOfRestaurants.filter((res)=>
  res.info.name.toLowerCase().includes(searchText))
  setFilterRes(filterRes)
}}>search</button>
       </div>
        <button className="filter-btn" onClick={()=>{
        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.4)
        setFilterRes(filteredRestaurants)
          
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          filterRes.map((restaurant)=>(
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/> </Link>
            )
        )
        }
        
      
       
      </div>
    </div>
  )
}

export default Body
