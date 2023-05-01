import React from 'react';
import Navbar from './components/navbar/Navbar';
import  Home  from './pages/home/Home';
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import MyGigs from './pages/myGigs/MyGigs';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Login from './pages/login/Login';
import Order from "./pages/order/Order"
import Add from './pages/add/Add';
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";




function App() {
  const Layout=()=>{
    return(
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout/>,
      children:[
         {
            path:"/",
            element:<Home/>
         },
         {
            path:"/gigs",
            element:<Gigs/>,
         },
         {
            path:"/gig/:id",
            element:<Gig/>,
         },
         {
            path:"/mygigs",
            element:<MyGigs/>,
         },
         {
            path:"/message/:id",
            element:<Message/>,
         },
         {
            path:"/messages",
            element:<Messages/>,
         },
         {
            path:"/add",
            element:<Add/>,
         },
         {
            path:"/order",
            element:<Order/>,
         },
 

      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
