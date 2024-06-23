import React, { useEffect, useState } from 'react'
import Container from './Container';
import Title from './Title';
import CountDown from './CountDown';
import Flex from './Flex';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Flashsales = () => {
   let [allProducts, setAllProducts] = useState([]);
   async function getAllProducts() {
    let data = await axios.get("https://dummyjson.com/products");
     setAllProducts(data.data.products);
    };
        // allProducts.map((Item) => {
        // console.log(Item.category);
        // })
   useEffect(() => {
    getAllProducts()
    }, []);
  
  
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
    slidesToShow: 4,
     slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
     responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
          
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
          
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
          
        }
      },

    ],
  };
  return (
      <section className='lg:mt-[140px] mt-10'>
      <Container>
        <div className='border-b'>
           <Flex className="lg:gap-[87px] mb-10 lg:flex-row flex-col">
           <Title subtitle="Today’s" title="Flash Sales" />
          <CountDown />
        </Flex>
     <Slider {...settings}>

       
         {allProducts &&
                allProducts.map((item) => (
                <div>
                     <ProductCard className="text-sm font-poppins text-white font-normal bg-thard py-1 px-3 rounded-[4px] absolute top-3 left-3" ratinge={item.stock} id={item.id} title={`${Math.floor(item.discountPercentage)}%`} subtitle={item.title} price={` ${Math.floor(item.price - (item.discountPercentage / 100) * item.price)} `} discountPrice={item.price} rating={item.rating} ImageUrl={item.thumbnail}/>
                </div>
                ))}
       </Slider>
         <div className='  text-center   mb-10 lg:mb-[60px] '>
          
             <Link className=' rounded-[4px] inline-block font-poppins font-medium text-base bg-thard text-secondary lg:px-12 px-6 lg:py-4 py-2'>View All Products</Link>
        </div>
        </div>
       
            
          </Container>
    </section>
  )
}

export default Flashsales;