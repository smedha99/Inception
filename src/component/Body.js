import React, { use } from 'react';
import RestaurantCard from './RestaurantCard';
import { useState,useEffect } from 'react';
import resList from '../utils/mockdata';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body=()=>{
    const [listOfRestro,setListOfRestro]=useState([]);
    const [filteredRestro,setFilteredRestro]=useState([]);
    const [searchText,setSearchText]=useState("");

   useEffect(()=>{
      fetchdata();
   },[]);
   const fetchdata = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setListOfRestro(resList);
      setFilteredRestro(resList);
   }
 
   if(listOfRestro.length===0){
      return <Shimmer/>
   }

   return(
      <div className="body">
        <div className="filter"> 
          <div className="search">
               <input type='text' className='search-box' value={searchText} onChange={(event)=>{
                  setSearchText(event.target.value);
               }}/>
               <button className='search-btn'
               onClick={()=>{
                  const filteredlist=listOfRestro.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestro(filteredlist);
               }}
               >Search</button>
          </div>
             <button className='filter-btn'
             onClick={()=>{
                const filteredlist=listOfRestro.filter((res)=>parseFloat(res.rating)>4.3);
                setFilteredRestro(filteredlist);
             }}>

             Top Rated</button>
         </div>
            <div className="res-container">
               {
                  filteredRestro.map((restaurant)=>(
                    <Link to={"/restaurant/"+restaurant.id} key={restaurant.id}>
                    <RestaurantCard resData={restaurant}/>
                    </Link> 
                  ))
               }
               
            </div>
      </div>
   )
}

export default Body;





