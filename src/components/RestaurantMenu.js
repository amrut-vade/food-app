
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useState,useEffect} from "react"
import RestaurantCategory from "./RestaurantCategory"
const RestaurantMenu = ()=>{
   
    const { resId } = useParams();
       // fetching logic written  another  custom hook
     const resInfo = useRestaurantMenu(resId);
      

    console.log("resInfo",resInfo )
  
    // index value
       const [showIndex, setShowIndex] = useState(null)


     if(resInfo===null) return <Shimmer/>


    const restaurantInfoCard =
    resInfo?.cards?.find(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info || {};

    const {
        name,
        city,
        cuisines = [],
        avgRating,
        costForTwoMessage,
      } = restaurantInfoCard;


        console.log("cards", resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)

        const itemCategory = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]
                  ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        console.log("item",itemCategory);

    //   const itemCardContainer = resInfo?.cards
    //   ?.find((card) => card?.groupedCard)
    //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    //     (innerCard) => innerCard?.card?.card?.itemCards
    //   );
  
    // const itemCards = itemCardContainer?.card?.card?.itemCards || [];
  
    console.log();


    return(
        <div className="text-center">
              <h1 className="font-bold  my-6 text-2xl">{name}</h1>
             <h3 className="font-bold fill-orange-400">{city}</h3>
            
            <p className="font-bold text-lg">
               {cuisines.join(" ")} - {costForTwoMessage}
            </p>
            {/* /* category accordian */}
            {
              itemCategory.map((category , index)=>
              <RestaurantCategory key={category?.card?.card.title} 
              showItems={index === showIndex?true:false}
              setShowIndex={(()=>setShowIndex(index))}
              data={category?.card?.card}

              />)
            }

        </div>
    )
}

export default RestaurantMenu;