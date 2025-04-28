
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore = configureStore({
  // its is main reducer   and it contains all small reducer
  reducer :{
    cart:cartReducer,
      // suppose u user sclice  
    //   user:userReducer

  },

}

);

export default appStore;