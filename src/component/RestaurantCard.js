import React from 'react';

const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
       <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img 
          alt="res-logo"
          className="res-logo"
          src={resData.image}/>
          <h3>{resData.name}</h3>
          <h4>{resData.cuisine}</h4>
          <h4>{resData.rating} stars</h4>
          <h4>{resData.time} minutes</h4>
       </div>
    )
 }

 export default RestaurantCard;