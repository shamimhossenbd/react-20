import React from 'react'
import Container from './Container'
import Image from './Image'

import VectorImg from '../assets/Vector.png'
import Sevcice from '../assets/Icon-Customer service.png'
import Secure from '../assets/Icon-secure.png'
import Flex from './Flex'


const CustomerService = () => {
  return (
      <section>
          <Container>
              <Flex className="justify-around mb-14 lg:mb-[140px]  ">
                  
              <div>
                  <div className='w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center border-[11px] border-gray-500  mx-auto mb-6  p-2'>
                      <Image className="w-[100% ]" src={VectorImg}/>
                  </div>
                  <h3 className=' font-poppins font-semibold leading-[28px] text-black text-sm	 text-center lg:text-xl'>FREE AND FAST DELIVERY</h3>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black'>Free delivery for all orders over $140</h5>
              </div>
              <div>
                  <div className='mx-auto  w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center border-[11px] border-gray-500 mb-6'>
                      <Image className="w-[70%]" src={Sevcice}/>
                  </div>
                  <h3 className=' font-poppins font-semibold leading-[28px] text-black text-sm	text-center  lg:text-xl'>24/7 CUSTOMER SERVICE</h3>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black'>Friendly 24/7 customer support</h5>
              </div>
              <div>
                  <div className='mx-auto   w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center border-[11px] border-gray-500 mb-6'>
                      <Image className="w-[70%]" src={Secure}/>
                  </div>
                  <h3 className='text-center  font-poppins font-semibold leading-[28px] text-black text-sm	 lg:text-xl'>MONEY BACK GUARANTEE</h3>
                  <h5 className='text-center  font-poppins text-xs	lg:text-sm font-normal leading-[21px] text-black'>We reurn money within 30 days</h5>
              </div>
              </Flex>
          </Container>
    </section>
  )
}

export default CustomerService