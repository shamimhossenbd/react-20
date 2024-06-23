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


const Cart = () => {
  
  let handleIncrement = (index ,qty) => {
    dispatch(productQuantityUpdate({id:index, qty,  actionName: 'increment'}));
  };

  let handleDecrement = (index,qty) => {
     dispatch(productQuantityUpdate({id:index, qty,  actionName: 'decrement'}));
  };
  let dispatch = useDispatch();
  let cartData = useSelector((state) => state.allProduct.cart);
  let handleDeleteCart = (id)=>{
   
    dispatch(removeProductReducer(id))
  }
 
  return (
    <section>
          <Breadcrumb />
          <Container>
              <Flex className=" justify-between bg-white mt-10  rounded-xl">
                  <div><h1 className=' font-poppins font-normal text-base  leading-6  my-6'>Product Image</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Product title</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Price</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Quantity</h1></div>
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>Subtotal</h1></div>
        </Flex>
        {cartData.map((item,index) => (
          
              <Flex className=" justify-between bg-white mt-10   items-center">
            <div className='relative'><Image className="w-20 ml-10 my-6" src={item.thumbnail} /><RxCrossCircled onClick={() => handleDeleteCart(item.id)}   className='bg-thard rounded-full text-white text-center absolute top-5 left-8 text-xl cursor-pointer' /></div>
            <div>{`${item.title.slice(0,15)} ...`}</div>
            <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6 '>${item.price }</h1></div>
          
          <div class=" w-[150px] border flex p-4 rounded " >
             <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center font-bold" value={item.qty}/>
                                   <Flex className="flex-col">
                                            
                                                <button class="btn btn-sm btn-dark btn-minus p-2 pt-1 pb-1 " >
                                                   <IoIosArrowUp  onClick={() => handleIncrement(index,item.qty)} className='text-base cursor-pointer' />
                                                </button>
                                            
                 
                                           
                                              <button class="btn btn-sm btn-dark btn-plus p-2 pt-1 pb-1 ">
                                                     <IoIosArrowDown  onClick={() => handleDecrement(index ,item.qty)}  className=' text-base cursor-pointer'/>
                                                </button>
                                            
                                      </Flex>
                      </div>
            
                  <div><h1 className=' font-poppins font-normal text-base  leading-6 px-10 my-6'>{`$ ${Math.floor(item.price - (item.discountPercentage / 100) * item.price)} `}</h1></div>
              </Flex>
        ))}
              <Flex className=" justify-between bg-white mt-10   items-center">
                 
                  <div><button className='rounded   cursor-pointer font-poppins font-normal text-base  leading-6  my-6 py-4 px-12 border border-slate-800'>Return To Shop</button></div>
                  <div><button className='rounded  cursor-pointer font-poppins font-normal text-base  leading-6  my-6 py-4 px-12 border border-slate-800'>Update Cart</button></div>
                
              </Flex>
              <Flex className=" justify-between bg-white mt-10  ">
                 
          <div className='rounded'>
            <input className='rounded font-poppins font-normal text-base  leading-6  mb-6 py-4 pl-6 pr-16 border border-slate-800' type="text" placeholder='Coupon Code' />
          </div>
          <div className='rounded'>
            <button className='cursor-pointer font-poppins font-normal text-base  leading-6  mb-6 py-4 px-12 border border-slate-800 hover:bg-thard rounded'>Apply Coupon</button>
          </div>
          
            <div className='border border-blue-950 p-6 mb-[140px] rounded'>
            <h1 className=' font-poppins  font-medium text-xl leading-6 text-black'> Cart Total</h1>
            <div className='border-b border-b-gray-400 '>
              <Flex className="justify-between gap-[307px] mt-6  mb-4 ">
              <h1>Subtotal:</h1>
              <h1>$1750</h1>
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
              <h1>$1750</h1>
               </Flex>
            </div>
            <div className='flex justify-center items-center mb-8 bt-4'>
              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-4  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-center">Procees to checkout</button>
            </div>
             </div>
                
              </Flex>
          </Container>
    </section>
  )
}

export default Cart


