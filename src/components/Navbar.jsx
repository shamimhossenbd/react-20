import React, { useState } from 'react'
import Container from './Container'
import Image from './Image'
import ListItem from './ListItem'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import logo from '../assets/Logo.png'
import { IoIosCloseCircle } from "react-icons/io";
import List from './List';
import { CiUser } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import Flex from './Flex';
import { Link , NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TbLogin2 } from "react-icons/tb";
import { getAuth, signOut } from "firebase/auth";
import { userLoginInfo } from '../Slices/userSlice';

const Navbar = () => {
  let dispatch = useDispatch();
    const auth = getAuth();
   let cartData = useSelector((state) => state.allProduct.cart)
  let userData = useSelector((state) => state.userLoginIn.value);
  
  let [menuShow, setMenuShow] = useState(false);
  let [userMenu, setUserMenu] = useState(false);
  let handleMenu = () => {
    setMenuShow(!menuShow)

  }

  let handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(userLoginInfo(""));
        localStorage.setItem("user", "");
    }).catch((error) => {
      
    });
  }
    

  return (
    <nav className='mt-10 border-b pb-6   relative z-50 '>
      <Container>
        <Flex className="justify-between items-center ">
           <Image src={logo} alt="logo" />
       <div className={`${menuShow ?  "block" : "hidden" } w-full  md:flex md:w-[75%]  justify-between items-center absolute md:static top-10 bg-black md:bg-white text-white md:text-black  p-5  md:p-0`}>
            <List>
              <NavLink to="/">
                <ListItem className="text-sm lg:text-base font-Poppins font-normal   after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500 ">Home</ListItem></NavLink>
              <NavLink to="/contact">
          <ListItem className="text-sm lg:text-base font-Poppins font-normal  after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500">contact</ListItem></NavLink>
              <NavLink to="/about">
                <ListItem className="text-sm lg:text-base font-Poppins font-normal  after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500">About</ListItem></NavLink>
         <NavLink to="/create">
        <ListItem className="text-sm lg:text-base font-Poppins font-normal  after:content-[''] after:w-0 block mt-3 md-0 md:inline-block mr-[48px] after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative md:hover:after:w-full after:duration-500    left-0  ">Sign Up</ListItem></NavLink>
        </List> 
        <Flex className="items-center gap-6">
          <div className='relative w-[243px] mt-5 md:mt-0'>
            
          <input className='bg-secondary w-full py-3 px-4 placeholder:font-Poppins text-xs leading-[18px] placeholder:text-black' type="text" placeholder='What are you looking for?' />
              <CiSearch className='absolute top-3 right-4 text-3xl' />
          </div>
              <Flex className="gap-5 items-center">
                
                <CiHeart className='text-white md:text-black text-2xl' />
                <NavLink  className=' relative' to="/cart"> <IoCartOutline className='text-white md:text-black text-3xl' />
                  <p className=' absolute top-[-10px] w-[20px] h-[20px] text-center text-white bg-thard rounded-full'>{cartData.length }</p>
                </NavLink>
                <div className='relative' onClick={()=> setUserMenu(!userMenu)}>
                  {
                    userMenu === true ? <IoIosCloseCircle   className=' text-thard text-3xl' /> : <CiUser className=' rounded-full lg:text-black text-white  text-3xl ' />
                  }
                  <div className={`absolute duration-1000 rounded-xl text-white w-[225px] ml-[-196px] h-[208px] p-5 bg-[#312e32] ${userMenu ? 'top-14' : '-top-[600px]'}`}>
                <Link to="/My_account">
                 <h4 className='text-sm mb-4 lg:text-base font-Poppins font-normal text-white  mt-1'>< CiUser className=' inline-block text-2xl'/>Manage My Account</h4></Link>
                 <h4 className='text-sm lg:text-base mb-4 font-Poppins font-normal text-white  '><CiUser className=' inline-block text-2xl'/>{userData ? (userData.displayName) : 
                  ''
                    }</h4>
                    {userData ?(
                    <button onClick={handleLogOut} className='text-sm lg:text-base font-Poppins font-normal text-white  mt-1'><TbLogout2 className=' inline-block text-2xl' />Logout</button>):(
                    <Link to="/login">
                 <h4 className='text-sm lg:text-base mb-4 font-Poppins font-normal text-white  mt-1'>< TbLogin2 className=' inline-block text-2xl'/>Login</h4></Link>)}
                
                </div>
                </div>
                
                
                
            
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
