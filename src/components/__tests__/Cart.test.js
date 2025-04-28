import {fireEvent, render,screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA_NAME from "../../utils/MockCartList.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header"
 

global.fetch = jest.fn(()=>{
      return Promise.resolve({
          json:()=>{
            return Promise.resolve(MOCK_DATA_NAME);
          }
      })
});


it ("Should  Search top rated restaurant" , async()=>{
    await act(async ()=>
     render(
    <BrowserRouter>
         <Provider store={appStore}>
           <Header/>
           <Body/>
    
         </Provider>
     </BrowserRouter>
   )
 );
 
     // cards before filter
       const accordianHeader = screen.getByText("Biriyani (10)");
         fireEvent.click(accordianHeader)
         expect( screen.getAllByTestId("foodItems").length).toBe(10);

         expect(screen.getByText("cart - (0 items)")).toBeInTheDocument();

         const addBtns = screen.getAllByRole("button", {name:"Add +"});
         fireEvent.click(addBtns[0]);
         expect(screen.getByText("cart - (1 items)")).toBeInTheDocument();

         
         

});