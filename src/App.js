import React, {lazy,Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState } from "react";
//  providing store to  application
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// React.createElement => ReactElemnt-Js Object => HTML Element (when we render it)

// lazy loading code spliting Bundling chunking

const Grocery = lazy(()=>import("./components/Grocery"))





const AppLayout = () => {


    const [userName, setUserName] =  useState();



    useEffect(()=>{
       // make  api call to get userName

       const data ={
          name:"Amrut Vade"
       };
       setUserName(data.name);

    },[])


  return (

    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
   
      <Header />
      {/* * if my path is = / */}
      {/* <Body /> */}
        {/** if my path is = /about */}
        {/* <About/> */}
         {/** if my path is = /contact */}
         {/* <Contact/>  */}

         <Outlet/>
        
    </div>
    </UserContext.Provider>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  // {
  //    path:"/",
  //    element:<AppLayout/>,
  //     errorElement:<Error/>
  // },
  // {
  //   path:"/about",
  //   element:<About/>
  // },
  // {
  //   path:"/contact",
  //   element:<Contact/>
  // }
   {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
    
        path:"/",
        element:<Body/>
        },
      {
    
      path:"/about",
      element:<About/>
      },
     {
       path:"/contact",
       element:<Contact/>
     },
     {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
    },
    {
      path:"/cart",
      element:<Cart/>
    }

      

    ],
     errorElement:<Error/>
   },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);