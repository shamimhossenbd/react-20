import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { IoCallOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import Breadcrumb from '../components/Breadcrumb';

const Contact = () => {
  return (
    <section>
        <Breadcrumb/>
      <Container>
        
            
              <section>
                  <Flex className="lg:justify-between mt-20 lg:mb-[140px] mb-3 lg:flex-row  flex-col gap-3" >
                      <div className='  '>
                  
      <div className=" lg:p-[35px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='border-b border-blue-950 p-[32px]'>
                                  
                <h5 className="mb-6  text-base     font-semibold tracking-tight text-gray-900 dark:text-white  ">
                    <IoCallOutline  className=' inline-block w-10 h-10 p-[10px] text-white rounded-full mr-[16px] bg-thard  text-base font-medium'/> Call To Us</h5>
                
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">We are available 24/7, 7 days a week.</p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Phone: +8801611112222</p>
            
         </div>
        <div className=' p-[32px]'>
                                  
                <h5 className="mb-6  text-base   pt-10  font-semibold tracking-tight text-gray-900 dark:text-white  ">
                    <FaRegMessage  className=' inline-block w-10 h-10 p-[10px] text-white rounded-full mr-[16px] bg-thard  text-base font-medium'/> Write To US</h5>
                
                <p className="mb-3 w-[250px] font-normal text-sm text-gray-700 dark:text-gray-400">Fill out our form and we will contact you within 24 hours.</p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Emails: customer@exclusive.com</p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Emails: support@exclusive.com</p>
            
         </div>
             
            </div>
                
                      </div>
                      
          <div className='p-[35px]  lg:ml-[30px]    bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
                          
          
        <div className="grid md:grid-cols-3 md:gap-6 ">
          <div className="relative z-0 w-full mb-5 group ">
            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Name *" required />
          </div>
          <div className="relative z-0 w-full mb-5 group">
           
            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Email *" required />
          </div>
           <div className="relative z-0 w-full mb-5 group  ">
                 
            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Phone *" required />
            
          </div>
           </div>
                               
        <textarea id="message" rows={10}  className="block mt-8 p-2.5 lg:w-[737px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8" placeholder="Your Massage." defaultValue={""} />
        
        <button type="submit" className="text-white float-end bg-thard hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-4  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center">Send Massage</button>
      
                      </div>
                  </Flex>
                  
              </section>
          </Container>
    </section>
  )
}

export default Contact