import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducs';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound></NotFound>,
    children:[
      {index:true,path:'/',element:<Home></Home>},
      {path:'/products', element:<AllProducts></AllProducts>},
      {path:'/products/new',element:<NewProduct></NewProduct>},
      {path:'/product/:id',element:<ProductDetail></ProductDetail>},
      {path:'/carts',element:<MyCart></MyCart>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
