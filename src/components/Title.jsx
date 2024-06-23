import React from 'react'

const Title = ({subtitle,title}) => {
  return (
    <div>
         <h4 className='font-poppins  relative text-thard text-base font-semibold  after:w-3 lg:after:w-[20px] after:h-5 lg:after:h-[40px] after:content-[""] after:absolute after:top-2/4 after:left-0 after:bg-thard after:rounded-[4px] after:translate-y-[-50%] lg:pl-9 pl-5
          '>{subtitle}</h4>
          <h2 className=' font-inter font-semibold text-[22px] lg:text-[36px] text-black leading-12 mt-6'>{ title}</h2>
    </div>
  )
}

export default Title
