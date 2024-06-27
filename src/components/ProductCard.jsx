import React from 'react'
import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartReducer } from '../Slices/productSlice';
const ProductCard = ({ title, subtitle, price, discountPrice, className, ImageUrl, rating, ratinge, id ,productDit}) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let handleProductDetails = () => {
        navigate(`/product/${id}`);
    }
    let handleAddToCart = () => {
        dispatch(cartReducer({...productDit ,qty:1}));
        // localStorage.setItem("cart", JSON.stringify(productDit));
    }
  return (
      <div  className='w-full lg:w-[270px] relative sm:px-1 lg:mb-[60px] mb-8'>
          <div className='w-full h-[250px] bg-secondary rounded-[4px] flex justify-center items-center relative group '>
              <h5 className={`${className}`}>-{title}</h5>

              <div className='absolute top-3 right-3'>
              <div className='bg-white p-[5px] rounded-full'>
                  <CiHeart  className='text-2xl'/>
              </div>
              <div className='bg-white p-[5px] rounded-full mt-3'>
                      <IoMdEye className='text-2xl' />
                    
              </div>
                  
              </div>
              
              <Image onClick={handleProductDetails} src={ImageUrl} />
              <button onClick={handleAddToCart} className='w-0 font-poppins font-medium text-base text-white bg-black absolute group-hover:w-full  bottom-0 left-0 py-2 rounded-b-[4px] '>
                  Add To Cart
              </button>
          </div>
          <h2 className=' font-poppins font-medium text-base text-black leading-6 mt-4'>{ subtitle}</h2>
          <Flex className="gap-4">
              
              <h3 className=' font-poppins font-medium text-base text-thard leading-6 mt-2'>${price}</h3>
              <del className=' justify-center items-center font-poppins font-medium text-base text-[#808080] leading-6 mt-2'>{ discountPrice}</del>
          </Flex>
          <List>
              <ListItem className="flex gap-1 my-2">
                  <Rate  value={rating} disabled />
                  <h3 className=' font-poppins text-sm text-[#808080] font-medium ml-2'>({ratinge})</h3>
              </ListItem>
              
          </List>
      </div>
  )
}

export default ProductCard;