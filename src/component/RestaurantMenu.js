import { useState,useEffect } from "react";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        await new Promise((resolve)=>setTimeout(resolve,1000));
        const restaurant=resList.find((res)=>res.id===parseInt(resId))
        setResInfo(restaurant);
    }
    if(resInfo===null){
        return <Shimmer/>
    }
    return (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <p>{resInfo.cuisine}</p>
            <h2>menu</h2>
            <ul>
                {resInfo.menu.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>     
    )
}
export default RestaurantMenu;