import React from 'react'
import './Product.css'
const Product = ({name,price,description,image}) => {
  return (
    <div className='product-card'>
       <img src={image} alt="not found" width='400px'/>
       <h3>{name}</h3>
       <p>{price}</p>
       <p>{description}</p>
       <button className='btn'>Add to cart</button>
    </div>
  )
}

export default Product