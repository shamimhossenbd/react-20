import React from 'react'
import Container from './Container'
import { Link, useLocation } from 'react-router-dom';
const Breadcrumb = () => {
    let location = useLocation().pathname;
    let locationPathName = location.split('/')[1];

  return (
          <section class="section-5  lg:pb-3 lg:mb-3 lg:pt-20 pt-10 ">
                <Container>
                    <div class="font-light">
                        <ol class="breadcrumb primary-color mb-0">
                           <li class="breadcrumb-item"><Link to="/" class=" font-poppins font-normal">Home</Link></li>
                           
                      <li class="breadcrumb-item text-black font-normal text-base">{ locationPathName}</li>
                        </ol>
                    </div>
                </Container>
              </section>
  )
}

export default Breadcrumb
