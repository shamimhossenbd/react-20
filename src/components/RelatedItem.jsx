import React from 'react'
import Title from './Title';
import ProductCard from './ProductCard';
import Keyboard from '../assets/productimage.png'

const RelatedItem = () => {
  return (
    <div>
          <Title subtitle="Related Item" />
          <div className='flex  flex-wrap mt-12 gap-3'>
               <ProductCard className="text-sm font-poppins text-white font-normal bg-thard py-1 px-3 rounded-[4px] absolute top-3 left-3" rating="5" ratinge="65" title="-30%" subtitle="AK-900 Wired Keyboard" price="560" discountPrice="70" ImageUrl={Keyboard}/>
               <ProductCard className="text-sm font-poppins text-white font-normal bg-thard py-1 px-3 rounded-[4px] absolute top-3 left-3" rating="5" ratinge="65" title="-30%" subtitle="AK-900 Wired Keyboard" price="560" discountPrice="70" ImageUrl={Keyboard}/>
               <ProductCard className="text-sm font-poppins text-white font-normal bg-thard py-1 px-3 rounded-[4px] absolute top-3 left-3" rating="5" ratinge="65" title="-30%" subtitle="AK-900 Wired Keyboard" price="560" discountPrice="70" ImageUrl={Keyboard}/>
               <ProductCard className="text-sm font-poppins text-white font-normal bg-thard py-1 px-3 rounded-[4px] absolute top-3 left-3" rating="5" ratinge="65" title="-30%" subtitle="AK-900 Wired Keyboard" price="560" discountPrice="70" ImageUrl={Keyboard}/>
             
       
          </div>
    </div>
  )
}

export default RelatedItem;
