import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import Image from './Image';

import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import Keyboard from '../assets/productimage.png'
import monitor from '../assets/monitor.jpg'
import macbook from '../assets/macbook-air-15-inch-space-gray-500x500.jpg'
import iphone from '../assets/iphone-14-pro-gold-500x500.jpg'
import ups from '../assets/ups.jpg'
import camara from '../assets/product-1.jpg'
import ProductCard from './ProductCard'

import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';


const ExploreItem = () => {
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
    centerPadding: "60px",
      rows: 2,
     
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
      
     <Slider {...settings}>
     
        {allProducts &&
                allProducts.map((item) => (
                <div>
                     <ProductCard className="text-sm font-poppins text-white font-normal  py-1 px-3 rounded-[4px] absolute top-3 left-3" ratinge={item.stock} id={item.id} title={`${Math.floor(item.discountPercentage)}%`}  price={` ${Math.floor(item.price - (item.discountPercentage / 100) * item.price)} `} discountPrice={item.price} rating={item.rating} ImageUrl={item.thumbnail}/>
                </div>
                ))}
    
        </Slider>
        
        
    )
    
}

export default ExploreItem
