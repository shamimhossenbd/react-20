import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
      <section>
          <Breadcrumb />
          <Container>
              <h1 className='  text-9xl font-medium  mt-16 text-center'>404 Not Found</h1>
              <p className='mt-10 text-base  font-medium text-center font-inter mb-20'>Your visited page not found. You may go home page.</p>
             <div className='flex justify-center items-center'>
              <Link to="/" ><button className='px-12  rounded-lg mb-32 flex justify-center items-center     py-4  text-center text-base font-medium text-white bg-thard '>  Back to home page</button></Link></div>
             
          </Container>
          
    </section>
  )
}

export default ErrorPage;