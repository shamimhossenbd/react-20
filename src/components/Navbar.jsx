import React, { useState } from 'react'
import Container from './Container'
import Image from './Image'
import ListItem from './ListItem'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import logo from '../assets/Logo.png'

import List from './List';

import Flex from './Flex';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
   let cartData = useSelector((state) => state.allProduct.cart)
  let [menuShow, setMenuShow] = useState(false);
  let handleMenu = () => {
    setMenuShow(!menuShow)

  }
  return (
    <nav className='mt-10 border-b pb-4 relative z-50'>
      <Container>
        <Flex className="justify-between items-center">
           <Image src={logo} alt="logo" />
       <div className={`${menuShow ?  "block" : "hidden" } w-full md:flex md:w-[73%]  justify-between items-center absolute md:static top-10 bg-black md:bg-transparent left-0 p-5 md:p-0`}>
            <List>
              <Link to="/">
                <ListItem className="text-sm lg:text-base font-Poppins font-normal  text-white md:text-black after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full  after:duration-500">Home</ListItem></Link>
              <Link to="/contact">
                <ListItem className="text-sm lg:text-base font-Poppins font-normal text-white md:text-black after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500">contact</ListItem></Link>
              <Link to="/about">
                <ListItem className="text-sm lg:text-base font-Poppins font-normal text-white md:text-black after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500">About</ListItem></Link>
              <Link to="/create">
        <ListItem className="text-sm lg:text-base font-Poppins font-normal text-white  md:text-black after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500    left-0  ">Sign Up</ListItem></Link>
        </List> 
        <Flex className="items-center gap-6">
          <div className='relative w-[243px] mt-5 md:mt-0'>
            
          <input className='bg-secondary w-full py-3 px-4 placeholder:font-Poppins text-xs leading-[18px] placeholder:text-black' type="text" placeholder='What are you looking for?' />
              <CiSearch className='absolute top-3 right-4 text-base' />
          </div>
          <Flex className="gap-4 items-center">
                <CiHeart className='text-white md:text-black text-2xl' />
                <Link className=' relative' to="/cart"> <IoCartOutline className='text-white md:text-black text-2xl' />
                  <p className=' absolute top-[-30px] w-[30px] h-[30px] text-center text-white bg-thard rounded-full'>{cartData.length }</p>
                </Link>
            
         </Flex>
        </Flex>
          </div>
          <MdOutlineMenu onClick={handleMenu}  className='md:hidden text-2xl absolute top-0 right-2'/>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
