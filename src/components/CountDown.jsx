import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import Semiclone from '../assets/Semiclone.png'
import { countDownDateAndTime } from 'countdown-date-time';
import Image from './Image'
const CountDown = () => {
    const conduct_date = '2024-07-25 16:54:00';
    let [count, setCount] = useState({});
    useEffect(() => {
        const countDown = countDownDateAndTime(conduct_date);
        setCount(countDown);
    },[count]);
    
  return (
      <Flex className="justify-center  items-center lg:gap-[17px]">
          <div>
              
          <h4 className=' mt-8 lg:mt-0 font-poppins lg:text-xs  font-medium lg:leading-[18px] text-black  '>Days</h4>
              <h2 className='mt-13 font-inter lg:text-[35px] font-bold lg:leading-[30px] text-black tracking-[4%] lg:mt-1'>{count.days }</h2>
          
          </div>
          <Image className="w-4 h-3 mt-[60px]   lg:w-4 lg:h-4 lg:mt-5" src={Semiclone}/>
          <div>
              
          <h4 className=' mt-8 lg:mt-0 font-poppins lg:text-xs  font-medium lg:leading-[18px] text-black    '>Hours</h4>
          <h2 className=' font-inter lg:text-[35px] font-bold lg:leading-[30px] text-black tracking-[4%] mt-1'>{count.hours }</h2>
          </div>
           <Image className="w-4 h-3 mt-[60px]   lg:w-4 lg:h-4 lg:mt-5" src={Semiclone}/>
          <div>
              
          <h4 className='   mt-8 lg:mt-0 font-poppins lg:text-xs  font-medium lg:leading-[18px] text-black    '>Minutes</h4>
          <h2 className=' font-inter lg:text-[35px] font-bold lg:leading-[30px] text-black tracking-[4%] mt-1'>{count.minutes }</h2>
          </div>
           <Image className="w-4 h-3 mt-[60px]   lg:w-4 lg:h-4 lg:mt-5" src={Semiclone}/>
          <div>
          <h4 className='   mt-8 lg:mt-0 font-poppins lg:text-xs  font-medium lg:leading-[18px] text-black   '>Seconds</h4>
          <h2 className=' font-inter lg:text-[35px] font-bold lg:leading-[30px] text-black tracking-[4%] mt-1'>{count.seconds }</h2>
              
          </div>
          
         
    </Flex>
  )
}

export default CountDown
