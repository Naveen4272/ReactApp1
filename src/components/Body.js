
import { useState } from "react"
import resList from "../utils/mockdata"
import RestaurantCard from "./RestauarantCard"

const Body = () =>{
  console.log(<Body/>);
  
  const [listOfRestaurants,setListOfRestaurants]=useState(resList)
  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.4)
        setListOfRestaurants(filteredRestaurants)
          
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            

          )
        )
        }
        
      
       
      </div>
    </div>
  )
}
export default Body
