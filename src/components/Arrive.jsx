import React from 'react'
import Container from './Container';
import Title from './Title';
import Flex from './Flex';
import Image from './Image';
import ArriveOneImg from '../assets/Frame -1.png'
import ArriveTwoImg from '../assets/Frame -2.png'
import ArriveThreeImg from '../assets/Frame-3.png'
import ArriveFourImg from '../assets/Frame-4.png'


const Arrive = () => {
  return (
      <section className='mb-16 lg:mb-32'>
          <Container>
              <Title subtitle="Featured" title="New Arrival" />
              <Flex className=" flex-col  lg:flex-row  justify-between gap-5 mt-8 lg:mt-[60px]">
                  <div className='md:w-[40%]  xl:w-auto'>
                      <Image src={ArriveOneImg} alt="ArriveOneImg"/>
                  </div>
                  <div className='flex flex-col justify-between gap-5 xl:gap-0'>
                      <Image src={ArriveTwoImg} alt="ArriveOneImg" />
                      <Flex className="justify-between flex-col gap-5 md:gap-0  md:flex-row">
                      <Image src={ArriveThreeImg} alt="ArriveOneImg" />
                      <Image src={ArriveFourImg} alt="ArriveOneImg" />
                        
                      </Flex>
                  </div>
              </Flex>
          </Container>
          
    </section>
  )
}

export default Arrive;