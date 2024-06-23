import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { GiFamilyHouse } from "react-icons/gi";
import { CiDollar } from "react-icons/ci";
import { BsBagHeart } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";

const Sale = () => {
  return (
      <section>
          <Container>
              <Flex className="lg:mb-[140px] mb-14  justify-between gap-7 lg:flex-row flex-col ">
                  <div>
                      
                 <div className='border py-[30px] px-[50px] hover:bg-thard group '>
                  <div className='w-[80px] h-[80px] mt-[30px]  group-hover:bg-white group-hover:text-black bg-black text-white rounded-full flex justify-center items-center border-[11px] border-gray-500  mx-auto mb-6  p-2'>
                      <GiFamilyHouse className='text-4xl'/>
                  </div>
                  <h1 className='translate-[10px] font-inter font-bold leading-[32px] text-black text-[32px] text-center mb-3 group-hover:text-white'>10.5k</h1>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black group-hover:text-white'>Sallers active our site</h5>
                  </div>
              </div>
                  <div>
                      
                 <div className='border py-[30px] px-[50px] hover:bg-thard group'>
                  <div className='w-[80px] h-[80px] mt-[30px] group-hover:bg-white group-hover:text-black bg-black text-white rounded-full flex justify-center items-center border-[11px] border-gray-500  mx-auto mb-6  p-2'>
                      <CiDollar className='text-4xl'/>
                  </div>
                  <h1 className='translate-[10px] font-inter font-bold leading-[32px] hover:text-white text-black text-[32px] text-center mb-3 group-hover:text-white'>10.5k</h1>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black group-hover:text-white'>Sallers active our site</h5>
                  </div>
              </div>
                  <div>
                      
                 <div className='border py-[30px] px-[50px] hover:bg-thard  group'>
                  <div className='w-[80px] h-[80px] mt-[30px] group-hover:bg-white group-hover:text-black bg-black text-white rounded-full flex justify-center items-center border-[11px] border-gray-500  mx-auto mb-6  p-2'>
                      <BsBagHeart className='text-4xl'/>
                  </div>
                  <h1 className='translate-[10px] font-inter font-bold leading-[32px]  text-black text-[32px] text-center mb-3 group-hover:text-white'>10.5k</h1>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black group-hover:text-white'>Sallers active our site</h5>
                  </div>
              </div>
                  <div>
                      
                 <div className='border py-[30px] px-[50px] hover:bg-thard group'>
                  <div className='w-[80px] h-[80px] mt-[30px] bg-black group-hover:bg-white group-hover:text-black  text-white rounded-full flex justify-center items-center border-[11px] border-gray-500  mx-auto mb-6  p-2'>
                      <FaSackDollar className='text-4xl'/>
                  </div>
                  <h1 className='translate-[10px] font-inter font-bold leading-[32px] text-black text-[32px] text-center mb-3 group-hover:text-white'>10.5k</h1>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black group-hover:text-white'>Sallers active our site</h5>
                  </div>
              </div>
              </Flex>
          </Container>
          
    </section>
  )
}

export default Sale
