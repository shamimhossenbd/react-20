import React, { useEffect, useState } from 'react'
import List from './List'
import ListItem from './ListItem'
import { FaAngleRight } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import Flex from './Flex';
import { useDispatch } from 'react-redux'
import { filterProductReducer } from '../Slices/productSlice'
import axios from 'axios';

const Category = () => {
   let [allProducts, setAllProducts] = useState([]);
      async function getAllProducts() {
        let data = await axios.get("https://dummyjson.com/products");
        setAllProducts(data.data.products);
        };
            // allProducts.map((Item) => {
            // console.log(Item.category);
            // })
      useEffect(() => {
        getAllProducts()
      }, []);
   let dispatch = useDispatch();
  let [categoryShow, setCategoryShow] = useState(false);
  useEffect(() => {
    uniqueCategory = [...new Set(allProducts.map((item) => item.category))]
    setUniqueCategory(uniqueCategory);
  }, [allProducts]);


   let [uniqueCategory, setUniqueCategory] = useState([]);
  let handleFilterCategory = (item) => {
    let filterProduct = allProducts.filter((Item) => Item.category === item);
    dispatch(filterProductReducer(filterProduct));
  };
  let  handleAllProduct = () => {
    dispatch(filterProductReducer(allProducts));
  };
  return (
    <div className='lg:mr-4 relative bg-black text-white lg:bg-white'>
      <div onClick={()=>setCategoryShow(!categoryShow)} className="items-center gap-2 lg:mt-2  select-none lg:hidden flex pl-4 pb-4">
        <TbCategoryFilled className='text-lg absolute lg:mt-0 mt-3'/>
        <h2 className='font-poppins text-lg lg:text-black select-none mx-6 mt-3 lg:mt-0'>Category</h2>
      </div>
      
      <List className={`mt-6 ${categoryShow ? 'block' : 'hidden'} lg:block `}>
              <ListItem onClick={()=> handleAllProduct()} className="font-poppins select-none cursor-pointer  text-sm lg:text-base font-normal leading-6 lg:text-black flex items-center justify-between mt-4 lg:pl-0 pl-5 pb-5">
                 All Product
        </ListItem>
          {uniqueCategory.map((item) => (
            
          <ListItem onClick={()=> handleFilterCategory(item)} className="font-poppins select-none cursor-pointer  text-sm lg:text-base font-normal leading-6 lg:text-black flex items-center justify-between mt-4 lg:pl-0 pl-5 pb-5">
                  {item}
          </ListItem>
          ))}
          
      </List>
              
      
    </div>
  )
}

export default Category
