import React from 'react'
import Banner from '../components/Banner'
import Flashsales from '../components/Flashsales'
import Categories from '../components/Categories'

import SProduct from '../components/SProduct';
import Offer from '../components/Offer';
import Explore from '../components/Explore';
import Arrive from '../components/Arrive';
import CustomerService from '../components/CustomerService';


const Home = () => {
  return (
    <>
      <Banner />
      <Flashsales />
      <Categories />
      <SProduct />
      <Offer />
      <Explore />
      <Arrive />
      <CustomerService />
      
    </>
  )
}

export default Home
