import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';

import Login from './pages/Login';
import Create from './pages/Create';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}></Route>
    <Route path="/login"  element={<Login/>}></Route>
    <Route path="/create"  element={<Create/>}></Route>
    <Route path="/contact"  element={<Contact/>}></Route>
    <Route path="/about"  element={<About/>}></Route>
    <Route path="/shop"  element={<Shop/>}></Route>
    <Route path="/product/:id"  element={<Product/>}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<ErrorPage/>} />
  </Route>)
);

const App = () => {
  return (
  
      <RouterProvider router={router} />
  
  )
}

export default App
