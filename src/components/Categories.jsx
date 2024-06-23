import React from 'react'
import Container from './Container'
import Title from './Title'
import CategoriesItem from './CategoriesItem'




const Categories = () => {
   
  return (
    <section className='mt-10   lg:mt-20 lg:mb-0 '>
      <Container >
        <div className='border-b'>

     <Title subtitle="Categories" title="Browse By Category" />
             
              <div className='mt-[60px] mb-[70px] '> 
              <CategoriesItem/>
                </div>
                  
        </div>
      </Container>
    </section>
  )
}

export default Categories
