import React from 'react'
import Container from './Container'
import Title from './Title'
import ExploreItem from './ExploreItem'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <section className="mt-[70px]">
     <Container>
              <div>
                  <Title subtitle="Our Products" title="Explore Our Products" />
                  <div className='mt-[60px]'>
                      <ExploreItem/>
                  </div>
                  <div className='text-canter flex mb-10 lg:mb-[140px]'>

                  <Link to="/shop" className='  inline-block mx-auto  font-poppins font-medium text-xs md:text-base leading-6  bg-thard rounded-[4px]  text-white text-center lg:items-center lg:justify-center px-5 py-3 lg:py-4 lg:px-12' href="#">View All Products</Link>
                 </div>
              </div>
      </Container>
    </section>
  )
}

export default Explore
