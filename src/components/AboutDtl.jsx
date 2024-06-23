import React from 'react'
import Container from './Container'

import Image from './Image'
import AboutDtlImageOne from '../assets/Frame 874.png'
import AboutDtlImageTwo from '../assets/Frame 875.png'
import AboutDtlImageThree from '../assets/Frame 876.png'
import "slick-carousel/slick/slick.css";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import Slider from "react-slick";
import Flex from './Flex'
import { Link } from 'react-router-dom'

const AboutDtl = () => {
      var settings = {
    dots: true,
    infinite: true,
     speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{ 
            position: 'absolute',
            bottom: "-10%",
            left: "50%",
             transform: 'translateX(-50%)'

           }}>
              <ul style={{ margin: "8px", display: "flex", gap: "12px" ,  
           
               
              }}>
              {dots} { ""}</ul>
      </div>
    ),
    customPaging:(i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
         background: "#808080",
        border: "3px solid #808080",
        
         borderRadius:"50%",
         
        }}
      >
      
      </div>
    )
  };
  return (
    <section className="md:mb-[196px] mb-14">
          <Container>
              
              <Slider {...settings}>
                      <div className='!w-[93%]'>  
                      <Image src={AboutDtlImageOne} alt="bannerImage" />
                      <h1 className='text-xl mt-8 mb-2 md:text-3xl font-medium'>Tom Cruise</h1>
                      <h3 className='text-base font-normal'>Founder & Chairman</h3>
                      <div className='flex md:text-3xl text-xl gap-3 mt-4'>
                     <Link><CiTwitter /></Link>
                      <Link> <CiInstagram /></Link>
                      <Link><CiLinkedin /></Link>
                      </div>
                     
                     
                      
                      </div>
                      <div className='!w-[93%]'>  
                      <Image src={AboutDtlImageOne} alt="bannerImage" />
                       <h1 className='text-xl mt-8 mb-2 md:text-3xl font-medium'>Tom Cruise</h1>
                      <h3 className='text-base font-normal'>Founder & Chairman</h3>
                      <div className='flex md:text-3xl text-xl gap-3 mt-4'>
                     <Link><CiTwitter /></Link>
                      <Link> <CiInstagram /></Link>
                      <Link><CiLinkedin /></Link>
                      </div>
                      </div>
                      <div className='!w-[93%]'>  
                      <Image src={AboutDtlImageTwo} alt="bannerImage" />
                       <h1 className='text-xl mt-8 mb-2  md:text-3xl font-medium'>Tom Cruise</h1>
                      <h3 className='text-base font-normal'>Founder & Chairman</h3>
                      <div className='flex md:text-3xl text-xl gap-3 mt-4'>
                     <Link><CiTwitter /></Link>
                      <Link> <CiInstagram /></Link>
                      <Link><CiLinkedin /></Link>
                      </div>
                      </div>
                      <div className='!w-[93%]'>  
                      <Image src={AboutDtlImageTwo} alt="bannerImage" />
                       <h1 className='text-xl mt-8 mb-2 md:text-3xl font-medium'>Tom Cruise</h1>
                      <h3 className='text-base font-normal'>Founder & Chairman</h3>
                      <div className='flex md:text-3xl text-xl gap-3 mt-4'>
                     <Link><CiTwitter /></Link>
                      <Link> <CiInstagram /></Link>
                      <Link><CiLinkedin /></Link>
                      </div>
                      </div>
                      <div className='!w-[93%]'>  
                      <Image src={AboutDtlImageThree} alt="bannerImage" />
                       <h1 className='text-xl mt-8 mb-2  md:text-3xl font-medium'>Shamim Hossen</h1>
                      <h3 className='text-base font-normal'>Founder & Chairman</h3>
                      <div className='flex md:text-3xl text-xl mt-4 gap-3'>
                     <Link><CiTwitter /></Link>
                      <Link> <CiInstagram /></Link>
                      <Link><CiLinkedin /></Link>
                      </div>
                      </div>
                      <div className='!w-[93%]'>  
                      <Image src={AboutDtlImageThree} alt="bannerImage" />
                       <h1 className='text-xl mt-8 mb-2 md:text-3xl font-medium'>Tom Cruise</h1>
                      <h3 className='text-base font-normal'>Emma Watson</h3>
                      <div className='flex md:text-3xl text-xl gap-3 mt-4'>
                     <Link><CiTwitter /></Link>
                      <Link> <CiInstagram /></Link>
                      <Link><CiLinkedin /></Link>
                      </div>
                      </div>
                      
                  </Slider>
                  
              
      </Container>
    </section>
  )
}

export default AboutDtl
