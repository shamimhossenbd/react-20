import React from 'react'

const ShopColor = ({title,color}) => {
  return (
    <div>
      <ul>
              <li className=' font-poppins font-normal text-base  text-gray-400 leading-7 mb-[18px]'>
                  <span style={{ background: `${color}` }} className={ `w-[11px] h-[11px] inline-block rounded-full  mr-[10px]`}></span>
                  {title }</li> 
      </ul>
    </div>
  )
}

export default ShopColor
