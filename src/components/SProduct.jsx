import React, { useEffect, useState } from 'react'
import Container from './Container'
import Title from './Title'
import { Link } from 'react-router-dom'

import Flex from './Flex'
import Keyboard from '../assets/BestSeelPrp-4.png'
import monitor from '../assets/BestSeelPrp-3.png'
import macbook from '../assets/BestSeelPrp-2.png'

import iphone from '../assets/BestSeelPrp-1.png'
import ProductCard from './ProductCard'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
// import { FaArrowLeft } from "react-icons/fa";

// import { FaArrowRight } from "react-icons/fa";



const SProduct = () => {
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
  
  
//   function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", justifyContent:"center" ,alignItems:"center" ,  background: "#F5F5F5" ,width:"46px",height:"46px" ,borderRadius:"50%", position:'absolute',right:"50px",top:"-100px",}}
//       onClick={onClick}
//     >
//        {/* <FaArrowLeft /> */}
      
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", justifyContent:"center" ,alignItems:"center" ,  background: "#F5F5F5" ,width:"46px",height:"46px" ,borderRadius:"50%" ,position:'absolute',right:0,top:"-100px",}}
//       onClick={onClick}
//     >
    //  <FaArrowRight />
//     </div>
//   );
// }
  
  var settings = {
   arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
     slidesToScroll: 1,
    //  nextArrow: <SampleNextArrow />,
    //  prevArrow: <SamplePrevArrow />,
     responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // nextArrow: "",
          // prevArrow: "",
          arrows: false,
          
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // nextArrow: "",
          // prevArrow: "",
          arrows: false,
          
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // nextArrow: "",
          // prevArrow: "",
          arrows: false,
          
        }
      },

    ],
  };
  return (
    <section>
          <Container>
              <div className='pt-[70px]'>
                  <div className='flex justify-between  mb-[60px] flex-col lg:flex-row'>
                      
            <Title subtitle="This Month" title="Best Selling Products" />
            <div className='text-canter mt-5'>

                  <Link className='  inline-block  font-poppins font-medium text-xs md:text-base leading-6  bg-thard rounded-[4px]  text-white lg:items-center lg:justify-center px-5 py-3 lg:py-4 lg:px-12' href="#">View All</Link>
              </div>
                  </div>
                 
         <Slider {...settings}>

         {allProducts &&
                allProducts.map((item) => (
                <div>
                     <ProductCard className="text-sm font-poppins text-white font-normal py-1 px-3 rounded-[4px] absolute top-3 left-3" ratinge={item.stock} id={item.id}  subtitle={item.title} price={`${Math.floor(item.price - (item.discountPercentage / 100) * item.price)} `} discountPrice={item.price} rating={item.rating} ImageUrl={item.thumbnail}/>
                </div>
                ))}
       </Slider>
            
       
              </div>
              
      </Container>
    </section>
  )
}

export default SProduct
