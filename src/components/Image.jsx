import React from 'react'

const Image = ({ src ,alt,className ,onClick}) => {
    
    return (
        
    <img onClick={onClick} className={className} src={src} alt={alt} />
  )
}

export default Image
