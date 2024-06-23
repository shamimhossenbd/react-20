import React from 'react'
import { MdPhoneAndroid } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { SiPcgamingwiki } from "react-icons/si";
import { CiLaptop } from "react-icons/ci";

const CategoriesItem = () => {
   function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", justifyContent:"center" ,alignItems:"center" ,  background: "#F5F5F5" ,width:"46px",height:"46px" ,borderRadius:"50%", position:'absolute',right:"50px",top:"-100px",}}
      onClick={onClick}
    >
       <FaArrowLeft />
      
    </div>
   );
    }
    
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", justifyContent:"center" ,alignItems:"center" ,  background: "#F5F5F5" ,width:"46px",height:"46px" ,borderRadius:"50%" ,position:'absolute',right:0,top:"-100px",}}
      onClick={onClick}
    >
     <FaArrowRight />
    </div>
  );
    }
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
     slidesToShow: 6,
     slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
     responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
          
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
          
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
          
        }
      },

    ],
  };
  return (
    <Slider {...settings}>
     
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <MdPhoneAndroid className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Phones</h3>
      </div>
      <div className='!w-[90%]  border border-gray group  rounded hover:bg-thard '>
          <HiOutlineDesktopComputer className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Computers</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <BsSmartwatch  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>SmartWatch</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <CiCamera  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Camera</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <CiHeadphones  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>HeadPhones</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <SiPcgamingwiki  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Gaming</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <SiPcgamingwiki  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Gaming</h3>
      </div>
      <div className='!w-[90%]  border border-gray group  rounded hover:bg-thard '>
          <CiLaptop  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Laptop</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <CiLaptop  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Laptop</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <CiLaptop  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Laptop</h3>
      </div>
      <div className='!w-[90%]  border border-gray group  rounded hover:bg-thard '>
          <CiLaptop  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Laptop</h3>
      </div>
      <div className='!w-[90%] border border-gray group  rounded hover:bg-thard '>
          <SiPcgamingwiki  className='text-[58px] mx-auto  mt-[25px] mb-4 group-hover:text-white ' />
          <h3 className='  font-poppins font-normal text-base text-black text-center pb-6 group-hover:text-white'>Gaming</h3>
      </div>
      </Slider>
  )
}

export default CategoriesItem
