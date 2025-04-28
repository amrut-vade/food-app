import {fireEvent, render,screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../utils/mockRestaurantListdata.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";

 

global.fetch = jest.fn(()=>{
      return Promise.resolve({
          json:()=>{
            return Promise.resolve(MOCK_DATA);
          }
      })
});



it ("Should  Search top rated restaurant" , async()=>{
     await act(async ()=>
      render(
         <BrowserRouter>
        <Body/>
      </BrowserRouter>
    )
  );
  
      // cards before filter
        const cardsBeforefilter = screen.getAllByTestId("resCard");
          expect( cardsBeforefilter.length).toBe(13);



   // top rated btn 
     
   const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurant"});

   fireEvent.click(topRatedBtn);

   const cardsAfterfilter = screen.getAllByTestId("resCard");
   expect( cardsBeforefilter.length).toBe(13);


    
    

   


});


it ("Should  Search Res List for burger text" , async()=>{
    await act(async ()=>
     render(
        <BrowserRouter>
       <Body/>
     </BrowserRouter>
   )
 );
 
     // get all cards before search
       const searchBeforecards = screen.getAllByTestId("resCard");
         expect(searchBeforecards.length).toBe(13);




   const searchBtn = screen.getByRole("button",{name:"Search"});
   //console.log(searchBtn);
   

   const searchInput = screen.getByTestId("searchInput")
   fireEvent.change(searchInput,{target :{value:"biryani"}});

   fireEvent.click(searchBtn)

         
   // screen should load 4 res cards

    const cards = screen.getAllByTestId("resCard");

   expect(cards.length).toBe(3);


});