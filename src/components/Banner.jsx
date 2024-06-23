import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Category from './Category'
import Image from './Image'
import BannerImage from '../assets/BannerImage.jpg'
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

const Banner = () => {
     var settings = {
    dots: true,
    infinite: true,
     speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{ 
            position: 'absolute',
            bottom: "5%",
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
          width: "12px",
          height: "12px",
          background: "#808080",
        
         borderRadius:"50%",
         
        }}
      >
      
      </div>
    )
  };
  return (
    <section>
          <Container>
              <Flex className="lg:gap-[45px] flex-col lg:flex-row">
                  <div className="lg:w-[20%] lg:border-r w-full">
                      <Category/>
                  </div>
                  <div className="lg:mt-10 mt-4 lg:w-[79%] w-full">
                      <Slider {...settings}>
                      <div>  
                      <Image src={BannerImage } alt="bannerImage"/>
                      </div>
                      <div>  
                      <Image src={BannerImage } alt="bannerImage"/>
                      </div>
                      <div>  
                      <Image src={BannerImage } alt="bannerImage"/>
                          </div>
                          </Slider>
                  </div>
              </Flex>
          </Container>
    </section>
  )
}

export default Banner