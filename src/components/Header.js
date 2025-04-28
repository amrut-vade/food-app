import {LOGO_URL} from "../utils/constants"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";
const Header = () => {

  // creating local varibale
   const[btnNameReact,setBtnNameReact]=useState("Login");

   const onlineStatus = useOnlineStatus();

   // using context  by useContext hook 
   const { loggedInUser} = useContext(UserContext)


   // subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items);

    

  return (
    <div className="flex justify-between p-2 bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-45" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
           <li className="px-4">Online Status :{onlineStatus?"🟢":"🔴 "}</li>
          <li  className="px-4"><Link to="/">Home</Link></li>
          <li  className="px-4"><Link to="/about">About Us</Link></li>
          <li  className="px-4"><Link to="/contact">Contact US</Link></li>
          <li  className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li  className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length } items)</Link></li>
          <button className="px-4"
           onClick={()=>{
            btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
           }}
          >{btnNameReact}</button>
           <li  className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;