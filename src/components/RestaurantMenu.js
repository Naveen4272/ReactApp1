import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer'
import { useParams   } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
const RestaurantMenu = () => {
  const {resId}=useParams();
  
  
  const[resInfo,setResInfo]=useState(null)
  useEffect(()=>{
fetchMenu()
  },[])
  
  const fetchMenu=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.015039&lng=76.909385&restaurantId="+resId)
  const json = await data.json()
 setResInfo(json.data)
  
  }
  if(resInfo===null) return <Shimmer/>
  
 
  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
  const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return (
    <div>
<h1>{name}</h1>
<p>{cuisines.join(" , ")}</p>
<h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <h3>costForTwo</h3>
      <ul>
       {itemCards.map((item,index)=>(
        <li key={index}> {item.card.info.name}</li>
       ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu
