import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { LuSendHorizonal } from "react-icons/lu";
import { BsQrCode } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Image from './Image';
import App from '../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import Apple from '../assets/AppStore.png'
import { CgFacebook } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
   
    
  return (
      <footer className=' bg-black lg:pb-6  pb-3'>
          <Container>
              <Flex className="lg:pt-[80px] pt-[40px]  justify-between  border-b border-gray-800 lg:flex-row flex-col">
                  <div className=''> 
                      <h2 className='text-2xl text-white font-inter font-bold leading-6 tracking-[3px]'>Exclusive</h2>
                 
                      <h3 className='text-xl text-white  font-poppins  font-medium leading-6 mt-6'>Subscribe</h3>
                      <h4 className='text-base text-white  font-poppins  font-normal leading-6  mt-6'>Get 10% off your first order</h4>
                      <div className='w-[217px] relative lg:pb-[108px] pb-10'>
                          
                    
                      <input placeholder='Enter your email' className=' w-full px-4 py-3 mt-4 border-white bg-black border rounded' type="text" />
                          <LuSendHorizonal className=' text-white absolute top-8 right-3 text-xl' />
                          </div>
                  </div>
                  <div>
                      <h2 className='text-xl text-white font-inter font-medium leading-6 '>Support</h2>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>exclusive@gmail.com</h4>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>+88015-88888-9999</h4>
                  </div>
                  <div>
                      <h2 className='text-xl text-white font-inter font-medium leading-6 '>Account</h2>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>My Account</h4>
    <Link to="/create"><h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'> Register</h4></Link>
     <Link to="/cart"><h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>Cart</h4></Link>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>Wishlist</h4>
   <Link to="/shop"><h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6 lg:mb-[60px] mb-5'>Shop</h4></Link> 
                  </div>
                  <div>
                    <h2 className='text-xl text-white font-inter font-medium leading-6 '>Quick</h2>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>Privacy Policy</h4>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>Terms Of Use</h4>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>FAQ</h4>
    <h4 className='text-base text-white  font-poppins  font-normal leading-6 w-[175px] mt-6'>Contact</h4>
    
                  </div>
                  <div>
                <h2 className='text-xl text-white font-inter font-medium leading-6 '>Download App</h2>
                
                <h4 className='text-xs text-white  font-poppins  font-normal leading-6  mt-6'>Save $3 with App New User Only</h4>
                      <div className='flex mt-2 justify-between'>
                          <div className='  text-white  text-4xl lg:text-8xl lg:mt-0 mt-3'> <Link><BsQrCode /></Link></div>
                          <div className='flex  flex-col text-white justify-between   '>
                              <Link className='lg:text-2xl text-xl ml-4'>
                                  <Image src={App}/>
                              </Link>
                              <Link className='lg:text-2xl text-xl ml-4'>
                                  <Image src={Apple}/>
                              </Link>
                          </div>
                          
                      </div>
                       <div className='flex lg:justify-between mb-4 lg:mb-0 justify-start gap-3 lg:mt-6 mt-3'>
                          
                           <Link className=' text-white text-2xl'><CgFacebook /></Link>
                          <Link className=' text-white text-2xl'><CiTwitter /></Link>
                          <Link className=' text-white text-2xl'><CiInstagram /></Link>
                          <Link className=' text-white text-2xl'><CiLinkedin /></Link>
                      </div>
                      
                  </div>
                   
              </Flex>
              <h3 className='  text-gray-500 text-center mt-4 font-poppins text-base font-normal'> &copy; Copyright Rimel 2022. All right reserved</h3>
          </Container>
      </footer>
  )
}

export default Footer
