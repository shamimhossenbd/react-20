import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import sideImage from '../assets/Side Image.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'


const Create = () => {
  return (
    <section className='lg:mt-[69px] lg:mb-[131px] mt-5'>
          <Container>
              <Flex className="justify-between  lg:flex-row flex-col">
                  <div>
                      <Image className="lg:h-[781px]" src={sideImage }/>
                  </div>
                  <div className='lg:ml-[129px]'>
                      <h1 className='font-inter font-medium text-4xl leading-6 translate-[4px] mt-10  lg:mt-[125px] w-[339px] mr-[32px]'>Create an account</h1>
                      <h3 className='  font-poppins font-normal text-base leading-6 mt-[24px]'>Enter your details below</h3>
                       <input type="text" id="name" class="    text-gray-900 text-sm focus:ring-blue-500  block w-full p-2.5 border-gray-300 dark:placeholder-gray-400 border-b-[2px] dark:focus:border-blue-500 mt-10" placeholder="Name" required />
                       <input type="text" id="name" class="    text-gray-900 text-sm focus:ring-blue-500  block w-full p-2.5 border-gray-300 dark:placeholder-gray-400 border-b-[2px] dark:focus:border-blue-500 mt-10" placeholder="Email or Phone Number" required />
                      <input type="text" id="name" class="    text-gray-900 text-sm focus:ring-blue-500  block w-full p-2.5 border-gray-300 dark:placeholder-gray-400 border-b-[2px] dark:focus:border-blue-500 mt-12" placeholder="Password" required />
                       <button type="submit" class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg font-normal  py-[16px] mt-10 text-center text-base w-full">Create Account</button>
                       <div className="relative">
                       <button type="submit" class=" border  focus:ring-4 focus:outline-none focus:ring-blue-300  font-normal rounded-lg   py-[16px] mt-4 text-center text-base w-full ">Sign up with Google</button>
                       <FcGoogle className=' absolute text-xl lg:text-2xl lg:top-8 lg:left-20 top-[34px] sm:top-[34px] sm:left-[248px]    left-[73px] md:top-[34px]  md:left-[247px]'  />
                       </div>
                       <div className="relative lg:mb-[125px] mb-5 ">
                       <button type="submit" class="   focus:ring-4 focus:outline-none focus:ring-blue-300  font-normal rounded-lg   py-[16px] mt-4 text-center text-base w-full ">Already have account?</button>
                       <Link to="/login" className=' absolute text-base  top-8 right-3 mr-5 hover:border-b border-gray-900'  >Log in</Link>
                       </div>
                      
                  </div>
              </Flex>
          </Container>
    </section>
  )
}

export default Create