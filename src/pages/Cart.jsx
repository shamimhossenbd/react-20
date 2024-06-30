import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import sideImage from '../assets/Side Image.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { RxCrossCircled } from "react-icons/rx";
import { productQuantityUpdate, removeProductReducer } from '../Slices/productSlice'
import { Link } from 'react-router-dom'


const Cart = () => {

  
  let handleIncrement = (index ,qty) => {
    dispatch(productQuantityUpdate({id:index, qty,  actionName: 'increment'}));
  };

  let handleDecrement = (index,qty) => {
     dispatch(productQuantityUpdate({id:index, qty,  actionName: 'decrement'}));
  };
  let dispatch = useDispatch();
  let cartData = useSelector((state) => state.allProduct.cart);
  let totalPrice = cartData.reduce((acc, item) => acc + Math.floor(item.price - (item.discountPercentage / 100)* item.price) * item.qty, 0);
  
  let handleDeleteCart = (id)=>{
   
    dispatch(removeProductReducer(id))
  }
  
  
  return (
    <section>
          <Breadcrumb />
      <Container>
        <div>

              <Flex className=" justify-between bg-white mt-10  rounded-xl border">
                  <div><h1 className=' font-poppins font-normal text-base  leading-6  my-6 ml-5'>Product Image</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Product title</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Price</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Quantity</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Subtotal</h1></div>
           </Flex>
        </div>
        {cartData.map((item,index) => (
          
              <Flex className=" lg:justify-between bg-white mt-10  flex-col lg:flex-row    items-center border rounded-xl">
            <div className='relative '><Image className="lg:w-20 w-full ml-10 my-6 relative" src={item.thumbnail} /><RxCrossCircled onClick={() => handleDeleteCart(item.id)}   className='bg-thard rounded-full text-white text-center absolute lg:top-5 lg:left-8 left-20 top-20 lg:text-xl text-2xl cursor-pointer  ' /></div>
            <div className='border lg:border-none px-32  py-4 lg:p-[0px]'>{`${item.title.slice(0,15)} ...`}</div>
            <div><h1 className=' px-32 lg:p-[0px] font-poppins font-normal text-base  rounded-lg leading-6  my-6  border lg:border-none py-4'>{`$ ${Math.floor(item.price - (item.discountPercentage / 100) * item.price)} `}</h1></div>
          
          <div class=" w-[150px] border flex p-4 rounded   items-center lg:mr-[-120px]" >
             <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center font-bold " value={item.qty}/>
                                   <Flex className="flex-col">
                                            
                                                <button class="btn btn-sm btn-dark btn-minus p-2 pt-1 pb-1 " >
                                                   <IoIosArrowUp  onClick={() => handleIncrement(index,item.qty)} className='text-base cursor-pointer' />
                                                </button>
                                            
                 
                                           
                                              <button class="btn btn-sm btn-dark btn-plus p-2 pt-1 pb-1 ">
                                                     <IoIosArrowDown  onClick={() => handleDecrement(index ,item.qty)}  className=' text-base cursor-pointer'/>
                                                </button>
                                            
                                      </Flex>
                      </div>
            
              <div><button className='font-poppins rounded-lg font-normal text-base  leading-6 py-4 my-6  sm:w-full bg-white border lg:border-none px-32 lg:pr-[80px]'>{`$ ${(item.qty) *(Math.floor(item.price - (item.discountPercentage / 100) * item.price))} `}</button></div>
              </Flex>
        ))}
              <Flex className=" justify-between bg-white mt-10   items-center">
                 
                  <div><button className='rounded   cursor-pointer font-poppins font-normal text-base  leading-6  my-6 py-4 px-12 border border-slate-800'>Return To Shop</button></div>
                  <div><button className='rounded  cursor-pointer font-poppins font-normal text-base  leading-6  my-6 py-4 px-12 border border-slate-800'>Update Cart</button></div>
                
        </Flex>
        
        <Flex className=" lg:justify-between bg-white mt-10 lg:flex-row  flex-col">
                 
          <div className='rounded'>
            <input className='rounded font-poppins font-normal text-base text-center  lg:leading-6 min-w-full   lg:mb-6 lg:py-4 py-4 lg:pl-6  lg:pr-16 border border-slate-800 mb-10' type="text" placeholder='Coupon Code' />
          </div>
          <div className='rounded'>
            <button className='cursor-pointer font-poppins font-normal text-base sm:w-full  leading-6  mb-6 py-4 px-12 border border-slate-800 hover:bg-thard rounded min-w-full'>Apply Coupon</button>
          </div>
          
            <div className='border border-blue-950 p-6 mb-[140px] rounded'>
            <h1 className=' font-poppins  font-medium text-xl leading-6 text-black'> Cart Total</h1>
            <div className='border-b border-b-gray-400 '>
              <Flex className="justify-between gap-[307px] mt-6  mb-4 ">
              <h1>Subtotal:</h1>
                <h1>${totalPrice }</h1>
               </Flex>
            </div>
            <div className='border-b border-b-gray-400 '>
              <Flex className="justify-between gap-[307px] mt-6  mb-4 ">
              <h1>Shipping:</h1>
              <h1>Free</h1>
               </Flex>
            </div>
            <div>
              <Flex className="justify-between gap-[307px] mt-6  mb-4 ">
              <h1>Total:</h1>
                <h1>${totalPrice}</h1>
               </Flex>
            </div>
            <div className='flex justify-center items-center mb-8 bt-4'>
              <Link to="/CheckOut">
              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-4  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-center">Procees to checkout</button></Link>
            </div>
             </div>
                
              </Flex>
          </Container>
    </section>
  )
}

export default Cart


