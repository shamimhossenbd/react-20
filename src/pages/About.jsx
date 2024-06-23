import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Image from '../components/Image'
import aboutImage from '../assets/about.png'
import Sale from '../components/Sale'
import AboutDtl from '../components/AboutDtl'
import CustomerService from '../components/CustomerService'
import Breadcrumb from '../components/Breadcrumb'

const About = () => {
  return (
    <section>
       <Breadcrumb/>
      <Container>
       
             
              <Flex className='justify-between lg:gap-[69px] lg:mb-[140px] mb-14 lg:flex-row flex-col '>
                  <div>
                      <h1 className='text-[54px] lg:mt-[137px] mt-10   pb-[40px] font-semibold'>Our Story</h1>
                      <p className='lg:w-[525px] font-poppins  font-normal text-base leading-6'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                      <p className='lg:w-[505px] font-poppins  font-normal text-base leading-6 mt-5 lg:pb-[136px] pb-14'>
                          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                      </p>
                  </div>
                  <div>
                    
                      <Image className='lg:h-[609px] lg:w-[735px]'  src={aboutImage }/>
                  </div>
        </Flex>
        <Sale />
        <AboutDtl />
        <CustomerService/>

      </Container>
    </section>
  )
}

export default About
