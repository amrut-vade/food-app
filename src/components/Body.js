//Not using keys (not acceptble) <<< index as key <<<<unique id (best practice)
import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
 import reslist from "../utils/mockData";
import { useContext, useEffect, useState } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";
 import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {


  const [resListState , setReslistState] = useState([]); 

  // creating varible to store filtered data

   const [filterRestaurant,setfilterRestarunt]=useState([])

  const[searchText,setSearchText] = useState("");

  // higher order function component
   const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

   // useContext  using context value
   const {loggedInUser,setUserName} =  useContext(UserContext)


   // console.log(reslist);

   useEffect(()=>{
    console.log("build")
     fetchData();
   },[])  

  
   const fetchData =async ()=>{
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580069&lng=77.6092188&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

       const JSON =  await data.json();
       // console.log("fecthdata",JSON )
        
        const restaurantArray = JSON?.data?.cards
           .filter(
             (card) =>
                card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card?.card?.card?.info);

      console.log("restaurantArray",restaurantArray || [])
           
      setReslistState(restaurantArray || []);
      setfilterRestarunt(restaurantArray || []);
       
     console.log("data", restaurantArray);
           
   }

     
   // logic 
  const  OnlineStatus = useOnlineStatus();

  if(OnlineStatus===false) return(
     <h1>Looks like your are offline!! Please  check your connection</h1>
    );

  


  return (
    <div className="body">
      <div className="Filter flex">
        <div className="search m-4 p-4">
            <input 
            type="text" 
            data-testid="searchInput"
            className="border border-solid border-black" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)

            }}
            />
             <button 
               className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={()=>{
                console.log(searchText)
              const filteredRestaurant =  resListState.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))

                console.log(filteredRestaurant);
                setfilterRestarunt(filteredRestaurant ||[])
              }}
             >Search</button>
        </div>
        <div className="search m-4 p-4  flex items-center rounded-lg">
        <button
          className="px-4  py-2 bg-gray-50"
          onClick={() => {
            console.log("clicked");
            //Filter Logic
            const updatedreslist = resListState.filter(
              (res) => res.avgRating > 4
            );
            // console.log(updatedreslist);
            setfilterRestarunt(updatedreslist);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
        {/* <div className="search m-4 p-4  flex items-center rounded-lg">
           <label>UserName :</label>
          <input className="border border-black p-2" value={loggedInUser} ></input>
        </div> */}
      </div>
      <div className="flex flex-wrap">
        {/* RestaurantCards */}
        {/* <RestaurantCards resData={reslist[0]} /> 
            onChange={(e)=>{setUserName(e.target.value)}}
        */}
        {
        
        filterRestaurant.map((restaurant) => (
              
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            {  
             restaurant.promoted?(
              <RestaurantCardPromoted   resData={restaurant}> </RestaurantCardPromoted>
            ):(

               <RestaurantCard  resData={restaurant}> </RestaurantCard>
              )
            }
          </Link>
        
        ))}
        
        {/* <RestaurantCards resName="KFC0" cuisine="Burger, Fast Food" /> */}
        {/* <RestaurantCard  key={restaurant.id} resData={restaurant}> </RestaurantCard> */}
      </div>
    </div>
  );
};

export default Body;


  // this code is for higher oreder component
{/* <Link >{
          
  restaurant.promoted? (
  <RestaurantCardPromoted key={restaurant.id} resData={restaurant}/> )
   : (<RestaurantCard  key={restaurant.id} resData={restaurant}/>

 )}

</Link> */}
 

