import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";


const ItemList = ({items})=>{

     
    const dispatch = useDispatch();

    const handleAdditems = () =>{
        // Dispacth an action
        dispatch(addItems("pizza"))
        console.log("dispatch",addItems);
    }

 
    return (
        <div>
             
                {
                    items.map((item)=>(
                    <div
                      data-testid="foodItems"
                     key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-1 text-left flex justify-between">
                           
                         

                          <div className="w-9/12">
                          <div className="py-2">
                             <span>{item.card.info.name}</span> 
                             <span>
                                -₹
                                {item.card.info.price?item.card.info.price /100
                                  :item.card.info.defaultPrice /100
                                }
                                </span> 
                           
                             </div>
                             <p className="text-xs">{item.card.info.description}</p>
                             </div>
                            <div className="w-3/12 p-4">
                                <div className="absolute">
                               <button className="p-2 mx-14  rounded-lg bg-black text-white shadow-lg"
                                 onClick={handleAdditems} >
                                
                                Add +</button>
                                </div>
                                <img src={CDN_URL + item.card.info.imageId}  className="w-full" alt="Image is not there"/>
                          </div>
                    </div>
                    ))
                }
             
        </div>
    );
};

export default ItemList;