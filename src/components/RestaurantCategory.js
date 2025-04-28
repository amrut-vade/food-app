import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
   console.log(data.title);
   
           // creating state to handle data
          //  const [showItems,setShowItem] = useState(false)


      const Handleclick = () =>{
        setShowIndex()
      }

    return (
       
       <div>
            
             <div className="w-6/12 border-gray-100 p-4 mx-auto my-4 shadow-lg ">
               <div className="flex justify-between cursor-pointer"
                 onClick={Handleclick}
               >
                <span className="font-bold text-lg ">
                  {data.title} ({data.itemCards.length})
                  </span>

               
                 <span>🔽</span>
                </div>
                {/* creating Accordian body component */}


                 {/* // if show item is true then show items */}
                {showItems && <ItemList items={data.itemCards}/>}
               
             </div>
        
       
       </div>
    )
}

export default RestaurantCategory;