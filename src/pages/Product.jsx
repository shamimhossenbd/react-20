import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Image from '../components/Image'
import product_1 from '../assets/product_1.png'
import product_2 from '../assets/product_2.png'
import product_3 from '../assets/product_3.png'
import product_4 from '../assets/product_4.png'

import { Rate } from 'antd';
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import RelatedItem from '../components/RelatedItem'

import axios from 'axios'
import { useParams } from 'react-router-dom'



const Product = () => {
  let {id } = useParams();

  let [product, setProduct] = useState({});
  let [productImg, setProductImg] = useState([]);
  let [productRev, setProductRev] = useState([]);
  async function getAllProducts() {
    let data = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(data.data);
    setProductImg(data.data.images);
    setProductRev(data.data.reviews);
  };
  console.log(product);
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
      <section>
          <Breadcrumb />
          <Container>
              

        <div class="flex lg:flex-row flex-col  justify-between   gap-7 mt-20 mb-[140px]">
            <div class=" justify-center items-center  flex   flex-col lg:w-[170px] sm:w-full  gap-4     ">
            
              {productImg.map((item) => (
                
               <Image  src={item}/>
              ))}
                
            </div>
             <div class=" flex justify-center items-center  ">
                  <Image  src={product.thumbnail}/>
            </div>
             <div class="ml-[30px] row-span-full col-span-10 ... ">
            <h1 className='text-2xl font-semibold leading-6 translate-[3px] tracking-wide mb-4	'>{ product.title}</h1>
            <Rate value={product.rating} disabled />
            <span className="font-normal text-base text-gray-400 mx-4">({productRev.length})</span>
            <span>|</span>
            <span className='mx-4 text-sm	font-normal text-[#00FF66]'>In Stock</span>
            <h1 className=' font-inter font-normal text-2xl leading-6   tracking-wide mt-4'>${product.price }</h1>
            <h3 className='mt-6 lg:w-[373px]   font-poppins font-normal text-sm leading-6 border-b border-black pb-6'>{product.description
 }</h3>

            {product?.color && <>
               <h1 className=' font-normal text-xl text-black mt-6'>Colours:
              <div className='w-5 h-5 bg-[#A0BCE0] inline-block rounded-full ml-6 outline outline-offset-1 hover:outline-none hover:outline-offset-0  hover:bg-[#E07575]  '></div>
              
              <div className='w-5 h-5 bg-[#A0BCE0] inline-block rounded-full   outline outline-offset-1 hover:outline-none hover:outline-offset-0  hover:bg-[#E07575] mx-5 '></div>
              
            
            </h1>
            </>}
           

            {product?.size && <>
              
       <h1 className='font-normal text-xl mt-6 text-center flex  gap-3 lg:justify-around items-center'>Size:
              <span className='inline-block text-base font-medium w-8 h-8 text-center border-black border rounded  hover:bg-[#E07575] hover:text-white hover:border-none'>XS</span>
              <span className='inline-block text-base font-medium w-8 h-8 text-center border-black border rounded  hover:bg-[#E07575] hover:text-white hover:border-none'>S</span>
              <span className='inline-block text-base font-medium w-8 h-8 text-center border-black border rounded  hover:bg-[#E07575] hover:text-white hover:border-none'>M</span>
              <span className='inline-block text-base font-medium w-8 h-8 text-center border-black border rounded  hover:bg-[#E07575] hover:text-white hover:border-none'>L</span>
              <span className='inline-block text-base font-medium w-8 h-8 text-center border-black border rounded  hover:bg-[#E07575] hover:text-white hover:border-none'>XL</span>
            </h1>

            </>}
           
            

            <div className='flex  lg:justify-around gap-3 items-center mt-6'>
              <div className='flex'>

              

<div class="inline-flex   rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-[#E07575] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#E07575] focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-[#E07575] dark:focus:bg-gray-700">
    -
  </button>
  <button type="button" class="lg:px-8 px-4 py-2 text-xs lg:text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-[#E07575] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#E07575] focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-[#E07575] dark:focus:bg-[#E07575]">
    2
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-[#E07575] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#E07575] focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-[#E07575] dark:focus:bg-[#E07575]">
    +
  </button>
</div>

              </div>
              <div>
<button type="button" class="focus:outline-none text-white bg-[#E07575] hover:bg-[#E07575] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs lg:text-sm px-6 lg:px-[48px] py-2.5   dark:bg-[#E07575] dark:hover:bg-[#E07575] dark:focus:[#E07575]">Buy Now</button>
              </div>
              <div>
                <CiHeart className='text-4xl border    rounded border-slate-600 hover:bg-[#E07575] hover:text-white ' />
              </div>
              
            </div>
            <div>
              <div class="flex mt-10">
                <div className='flex border border-gray-600  justify-center items-center w-full'>
                  <div className='w-[20%] flex  items-center justify-center'>
                    <TbTruckDelivery  className='text-4xl'/>
                    </div>
                  <div className='w-[80%]'>
                    <h1 className='mt-6 mb-2 text-base font-medium'>Free Delivery</h1>
                    <h3 className=' font-poppins  font-medium text-xs leading-4 mb-4'>Enter your postal code for Delivery Availability</h3>
                </div>
                </div>
                <div>
                  <div></div>
                  <div></div>

                </div>
              </div>
              <div class="flex ">
                <div className='flex border border-b-gray-600 border-x-gray-600 justify-center items-center w-full'>
                  <div className='w-[20%] flex  items-center justify-center'>
                    <FaArrowsRotate  className='text-4xl'/>
                    </div>
                  <div className='w-[80%]'>
                    <h1 className='mt-6 mb-2 text-base font-medium'>Return Delivery</h1>
                    <h3 className=' font-poppins  font-medium text-xs leading-4 mb-4'>Free 30 Days Delivery Returns. Details</h3>
                </div>
                </div>
              
              </div>
            </div>
            </div>
        </div>
        <div>
          <RelatedItem/>
        </div>
          </Container>
      </section>
  )
}

export default Product;