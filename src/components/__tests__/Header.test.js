import {fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";


it ("it should render Header Component with a login button ", ()=>{
      
      render (
        <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
      </Provider>
      </BrowserRouter>
    );

    const LoginButton = screen.getByRole("button", {name :"Login"});
     // const LoginButton = screen.getByText("Login")
    expect(LoginButton).toBeInTheDocument();


} )



it ("it should render Header Component with a cart items 0 button ", ()=>{
      
    render (
      <BrowserRouter>
   <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText("Cart - (0 items)");
   // const LoginButton = screen.getByText("Login")
  expect(CartItems).toBeInTheDocument();


} )

it ("it should change login Button to logout on click  ", ()=>{
      
    render (
      <BrowserRouter>
   <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button", {name :"Login"});

   // const LoginButton = screen.getByText("Login")
    fireEvent.click(LoginButton);
    const LogoutButton =screen.getByRole("button", {name :"Logout"});
  expect(LogoutButton ).toBeInTheDocument();


} )