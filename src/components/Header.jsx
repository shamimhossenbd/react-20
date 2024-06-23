import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-black py-3'>
      <Container>
          <div className='relative'>

          <h3 className='w-[75%]  lg:w-full   font-Poppins text-center text-white text-xs lg:text-sm font-normal leading-5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className='font-semibold leading-6 font-Poppins underline ml-2'>ShopNow</Link></h3>
          
      
             
        <select id="countries" className="w-[78px] bg-black text-white rounded-none focus:outline-none absolute right-0 top-2 lg:top-0 "
          >
          <FaAngleDown />
                      <option selected className='rounded-none'>
                        English
                      </option>
                      <option value="BN">
                        Bangla
                      </option>
                      <option value="CA"> Canada </option>
           </select>
          </div>
        
      </Container>
    </header>
  )
}

export default Header
