import React from 'react'
import Container from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import sideImage from '../assets/Frame 834.png'
import Flex from '../components/Flex';
import Image from '../components/Image'
import { useDispatch, useSelector } from 'react-redux'


const CheckOut = () => {
    let cartData = useSelector((state) => state.allProduct.cart);
    let totalPrice = cartData.reduce((acc, item) => acc + Math.floor(item.price - (item.discountPercentage / 100)* item.price) * item.qty, 0);
  return (
      <section>
          <Breadcrumb/>
          <Container>
              <h1 className=' text-4xl font-medium font-inter  leading-7 mt-20 mb-12'>Billing Details</h1>
              <Flex className="lg:gap-20 lg:flex-row flex-col p-5 lg:p-0">
                  <div className='lg:w-6/12 w-full'>
                  
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">First Name<span className="text-2xl text-red-700">*</span></label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 "  required />
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">Company Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 "  required />
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">Street Address<span className="text-2xl text-red-700">*</span></label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 "  required />
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">Apartment, floor, etc. (optional)<span className="text-2xl text-red-700">*</span></label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 "  required />
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">Town/City<span className="text-2xl text-red-700">*</span></label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 "  required />
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">Phone Number<span className="text-2xl text-red-700">*</span></label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 "  required />
            <label for="first_name" class="block mb-2 text-base  font-normal text-gray-900 dark:text-white">Email Address<span className="text-2xl text-red-700">*</span></label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8 " required />
                      <div className=' flex gap-4   justify-start items-center mb-36'>
                          
                      <input type="checkbox" defaultChecked className="checkbox checkbox-error bg-thard  text-white w-6 h-6" />
                      <span className="label-text text-base font-poppins font-normal leading-6 text-black">Save this information for faster check-out next time</span>
                      </div>
      
                  </div>
                  <div className='lg:w-6/12 w-full'>
             {cartData.map((item,index) => (
                        <Flex className=" lg:justify-between bg-white mt-10  flex-col lg:flex-row    items-center border rounded-xl">
            <div className='relative '><Image className="lg:w-20 w-full ml-10 my-6 relative" src={item.thumbnail} /></div>
            <div className='border lg:border-none px-32  py-4 lg:p-[0px]'>{`${item.title.slice(0,15)} ...`}</div>
            
          
          
            
              <div><button className='font-poppins rounded-lg font-normal text-base  leading-6 py-4 my-6  sm:w-full bg-white border lg:border-none px-32 lg:pr-[80px]'>{`$ ${(item.qty) *(Math.floor(item.price - (item.discountPercentage / 100) * item.price))} `}</button></div>
                           </Flex>
             ))}
      <div className='border lg:mt-8  p-6 mb-7 rounded'>
            
            <div className='border-b border-b-gray-400 '>
              <Flex className="justify-between lg:gap-[307px] mt-6  mb-4 ">
              <h1>Subtotal:</h1>
                <h1>${totalPrice }</h1>
               </Flex>
            </div>
            <div className='border-b border-b-gray-400 '>
              <Flex className="justify-between lg:gap-[307px] mt-6  mb-4 ">
              <h1>Shipping:</h1>
              <h1>Free</h1>
               </Flex>
            </div>
            <div>
              <Flex className="justify-between lg:gap-[307px] mt-6  mb-8 ">
              <h1>Total:</h1>
                <h1>${totalPrice}</h1>
               </Flex>
             </div>
            <div>
              <Flex className="justify-between  mt-6  mb-8 ">
              <h1 className='relative ml-12 basis-2/4'><span className='absolute w-8 h-8 leading-8 border border-black rounded-full  left-[-50px] right-0'></span>Bank</h1>
                <h1 className='basis-2/4'><Image className=" w-56 h-7 " src={sideImage} /></h1>
               </Flex>
              </div>
              <h1 className='relative ml-12 basis-2/4 font-poppins font-normal text-base leading-6 '><span className='absolute w-6 h-6 leading-6 border border-black rounded-full  left-[-40px] right-0 outline outline-offset-4 bg-black'></span>Cash on delivery</h1>
             </div>
               <Flex className="justify-between    mb-8 ">
                  <div className='rounded'>
                  <input className='rounded font-poppins font-normal text-base text-center  lg:leading-6 min-w-full   lg:mb-6 lg:py-4 py-4 lg:pl-6  lg:pr-16 border border-slate-800 mb-10' type="text" placeholder='Coupon Code' />
                </div>
                <div className='rounded'>
                  <button className='cursor-pointer font-poppins font-normal text-base sm:w-full  leading-6  mb-6 py-4 lg:px-12 px-3 border border-slate-800 hover:bg-thard rounded min-w-full'>Apply Coupon</button>
                </div>
            </Flex>
            <div className='rounded'>
                  <button className='mb-60 flex lg:w-6/12  cursor-pointer font-poppins font-normal text-base   leading-6   py-4 px-12 border border-slate-800 hover:bg-thard rounded  w-full'>Place Order</button>
                </div>
              </div>
              </Flex>
          </Container>
    </section>
  )
}

export default CheckOut;