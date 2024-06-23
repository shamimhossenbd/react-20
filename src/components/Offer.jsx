import React from 'react'
import Container from './Container'
import OfferImage from '../assets/Offer.png'
import Image from './Image'
import { Link } from "react-router-dom";

const Offer = () => {
  return (
      <section >
          <Container>
              <Link>
              <Image src={OfferImage } />
              </Link>
          </Container>
      
    </section>
  )
}

export default Offer
