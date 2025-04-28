import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  console.log("Mock",resData);

  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="rounded-lg h-40 w-60"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating} star</h4>
      <h4> {sla.deliveryTime} minutes</h4>
    </div>
  );
};


//  higher order component   
// it takes  another component as  input and return enhached component 
//  we are taking restaurant card component as input  anding new fature that is prompted
export const withPromtedLabel =(RestaurantCard)=>{

      return(props) =>{
          return(
              <div>
               <label className="absolute m-2 p-2  text-white bg-black rounded-lg">
                Promoted
               </label>
                <RestaurantCard {...props}/>
              </div>
          );
      };

};



export default RestaurantCard;