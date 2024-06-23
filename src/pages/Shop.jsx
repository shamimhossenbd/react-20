import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ShopCategory from '../components/ShopCategory'
import ShopByProducts from '../components/ShopByProducts'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productReducer } from '../Slices/productSlice'
import Item from 'antd/es/list/Item'


const Shop = () => {
  let [allProducts, setAllProducts] = useState([]);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  async function getAllProducts() {
    let data = await axios.get("https://dummyjson.com/products");
     setAllProducts(data.data.products);
     dispatch(productReducer(data.data.products));
     setLoading(false);
  };
  // allProducts.map((Item) => {
  //   console.log(Item.category);
  // })
  
  
  useEffect(() => {
    getAllProducts()
  }, []);
  return (
    <section>
      <Breadcrumb />
      <Container>
        <Flex className="lg:flex-row flex-col mt-3">
          <div className='lg:w-[25%] '>
            <ShopCategory allProducts={ allProducts} />
          </div>
          <div className='lg:w-75% w-full'>
            <ShopByProducts loading={loading}   />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Shop
