import React from 'react'
import prodimg from '../assets/product.jpg'
import '../components/Product.css'
const Product = ({product}) => {
  return (
    <div className='product-card '>
        <img src={prodimg} alt="" />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.rating.rate}</p>
        <p>{product.rating.count}</p>
    </div>
  )
}

export default Product