import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",

    initialState:{
       items:[],
    },
    reducers:{
          addItems:(state,action)=>{
              state.items.push(action.payload);
          },
          removeItems : (state,action)=>{
             state.items.pop();
          },
          clearCart :(state ,action)=>{
             state.items.length =0;
          },
    },

})

// expirt action and reducers  this is synatax
export   default cartSlice.reducer;
// action 
export const {addItems,removeItems,clearCart} = cartSlice.actions;