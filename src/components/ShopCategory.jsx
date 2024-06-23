import React, { useEffect, useState } from 'react'

import ShopColor from './ShopColor'
import List from './List'
import ListItem from './ListItem'
import Item from 'antd/es/list/Item'
import { useDispatch } from 'react-redux'
import { filterProductReducer } from '../Slices/productSlice'

const ShopCategory = ({ allProducts }) => {
  let dispatch = useDispatch();
  let [categoryShow, setCategoryShow] = useState(false);
  let [uniqueCategory, setUniqueCategory] = useState([]);
  useEffect(() => {
    uniqueCategory = [...new Set(allProducts.map((item) => item.category))]
    setUniqueCategory(uniqueCategory);
  }, [allProducts]);
  let handleFilterCategory = (item) => {
    let filterProduct = allProducts.filter((Item) => Item.category === item);
    dispatch(filterProductReducer(filterProduct));
  };
  let  handleAllProduct = () => {
    dispatch(filterProductReducer(allProducts));
  };
  
  return (
    <div className='w-full'>
       <h2 className=' font-poppins font-bold  text-[20px] text-black w-[184px] mb-5'>Shop by Category</h2>
      <div>
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
      <h2 className=' font-poppins font-bold  text-[20px] mb-[15px] text-black mt-10'>Shop by Color</h2>
      <ShopColor title="Color 1" color="black"/>
      <ShopColor title="Color 2" color="#FF0000"/>
      <ShopColor title="Color 3" color="#00FF38"/>
      
    </div>
  )
}

export default ShopCategory
