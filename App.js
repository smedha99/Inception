import React from "react";     
import ReactDOM from "react-dom/client";
const jsxele=React.createElement("div",{id:"parent"},"hello im in jsxele");
//const root=ReactDOM.createRoot(document.getElementById("root"));


/*
header
 -logo
 -nav items 
body
  -search
  -restaurantsContainer
     -restaurantCard
footer
  -copyright
  -links
  -contact
  -address
*/
const Header=()=>{
   return(
      <div className="header">
         <div className="Logo-container">
            <img className="logo"  src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo"/>
         </div>
         <div className="nav-items">
            <ul className="nav-list">
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   )
}

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

const resList=[
   {
      name:"meghana food",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiz6fMr-Q75hK9pCx51SHjVBmG6TL_06jgw&s",
      cuisine:"paneer,north-indian",
      rating:"4.4 stars",
      time:"38 minutes"
   },
   {
      name:"kfc",
      image:"https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740",
      cuisine:"burger,foreign,fast-food",
      rating:"4.3 stars",
      time:"38 minutes"
   },
   {
      name:"dominos",
      image:"https://b.zmtcdn.com/data/pictures/8/18738868/bedddb08e3eafa541fdec9db26613993.jpg?fit=around|750:500&crop=750:500;*,*",
      cuisine:"pizza,foreign,fast-food",
      rating:"4.4 stars",
      time:"38 minutes"
   },
   {
      name:"mcdonalds",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUODBJ92bd5fvQmaYG6lDPTV6gTw-IOMGCw&s",
      cuisine:"burger,foreign,fast-food",
      rating:"4.2 stars",
      time:"30 minutes"
   },
   {
      name:"pizza hut",
      image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/3bd72829-0118-426e-8447-91fea64079d6_16876.jpg",
      cuisine:"burger,foreign,pizza,fast-food",
      rating:"4.4 stars",
      time:"35 minutes"
   },
   {
      name:"taco bell",
      image:"https://tacobell.com.au/wp-content/uploads/2020/05/Artboard-1-1-e1698210086600.png",
      cuisine:"burger,foreign,taco,fast-food",
      rating:"4.2 stars",
      time:"37 minutes"
   },{
      name:"subway",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4p6pAbljpIVWOuKLSLrTMdss9p5KFAuBjQ&s",
      cuisine:"burger,foreign,sandwich,fast-food",
      rating:"4.4 stars",
      time:"38 minutes"
   },
   {
      name:"starbucks",
      image:"https://starbucksstatic.cognizantorderserv.com/Items/Small/103515.jpg",
      cuisine:"foreign,coffee,fast-food",
      rating:"4.4 stars",
      time:"39 minutes"
   }
]

const Body=()=>{
   return(
      <div className="body">
        <div className="search"> Search </div>
            <div className="res-container">
               <RestaurantCard resData={resList[0]}/>
               <RestaurantCard resData={resList[1]}/>
               <RestaurantCard resData={resList[2]}/>
               <RestaurantCard resData={resList[3]}/>
               <RestaurantCard resData={resList[4]}/>
               <RestaurantCard resData={resList[5]}/>
               <RestaurantCard resData={resList[6]}/>
               <RestaurantCard resData={resList[7]}/>

               
            </div>
      </div>
   )
}

const AppLayout=()=>{
   return(
      <div className="app">
         <Header/>
         <Body/>
      </div>
   )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     // const heading=React.createElement("div",{id:"parent"},
        //     React.createElement("div",{id:"child"},
        //         [React.createElement("h1",{},"i'm in h1 tag"),
        //             React.createElement("h2",{},"i'm in h2 tag"),
        //         ]));
        
        
        // const root=ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);
      //   const Title=()=>(
      //    <h1 className="hii">
      //       hii i am inside title
      //    </h1>
      // )
      // const HeadingComponent=()=>(
      //    <div>
      //    <Title/>
      //    <h1>hii im inside Heading Component</h1>
      //    </div>
      // )
      // const heading=<h1>hello i am medha singh</h1>