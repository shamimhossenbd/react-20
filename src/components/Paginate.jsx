import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';
import { Flex } from 'antd';
import Keyboard from '../assets/productimage.png'
import { useSelector } from 'react-redux';

const Paginate = ({itemsPerPage  }) => {
    
      let productData = useSelector((state) => state.allProduct.product);
      const items = productData;
    function Items({ currentItems }) {
        return (
            <Flex className=' flex-wrap justify-center'>
            {currentItems &&
                currentItems.map((item) => (
                <div>
                    <ProductCard className="text-sm font-poppins text-white font-normal bg-thard py-1 px-3 rounded-[4px] absolute top-3 left-3" ratinge={item.stock} id={item.id} title={`${Math.floor(item.discountPercentage)}%`} subtitle={item.title} price={` ${Math.floor(item.price - (item.discountPercentage / 100) * item.price)} `} discountPrice={item.price} rating={item.rating} ImageUrl={item.thumbnail} productDit={item} />
                </div>
                ))}
            </Flex>
        );
    }
     
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    };
    
     return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
       renderOnZeroPageCount={null}
                 className='flex ml-10'
                 pageClassName='bg-black text-white px-6 py-2 ml-2 mb-5'
      />
    </>
  );

  
}

export default Paginate