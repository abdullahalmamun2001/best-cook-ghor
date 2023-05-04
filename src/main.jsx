import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Chefs from './Components/Chefs/Chefs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Recipes from './Components/Recipes/Recipes.jsx';
import Chef from './Components/Chef/Chef.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import AuthPRovider from './Components/Provider/AuthPRovider.jsx';
import PrivateRouter from './Route/PrivateRouter.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      // {
      //     path:"/chefs",
      //     element:<Chefs></Chefs>,
      // },
      // {
      //   path:"/chefs/:id",
      //   element:<Chef></Chef>,
        
      // },
      {
        path:'blogs',
        element:<Blog></Blog>
      },
      {
        path:'/chefs/:id',
        element:<PrivateRouter><Recipes></Recipes></PrivateRouter>,
        loader:({params})=>fetch(`https://shape-server-abdullahalmamun2001.vercel.app/chefs/${params.id}`)
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPRovider><RouterProvider router={router}></RouterProvider></AuthPRovider>
  </React.StrictMode>,
)
