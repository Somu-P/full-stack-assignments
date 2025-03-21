import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import './App.css'
const products=
[
    {
      "id": 1,
      "name": "Espresso",
      "price":"₹299",
      "description": "A rich and bold shot of espresso with a smooth crema.",
      "image": "https://img.freepik.com/premium-photo/square-coffee-cup-with-deep-espresso-beans_880492-21074.jpg"
    },
    {
      "id": 2,
      "name": "Cappuccino",
      "price":"₹499",
      "description": "A perfect blend of espresso, steamed milk, and frothy foam.",
      "image": "https://media.istockphoto.com/id/1450118672/photo/roasted-coffee-beans-with-cappuccino-with-heart-foam-pattern-square-shape.jpg?s=612x612&w=0&k=20&c=9bWTInLCXHON7UmmrEAEVCbP3Jrq8TFwU_jpcWmtO8s="
    },
    {
      "id": 3,
      "name": "Latte",
      "price":"₹299",
      "description": "A creamy coffee made with espresso and steamed milk.",
      "image": "https://thumbs.dreamstime.com/b/glass-latte-coffee-dessert-frothy-drink-sweet-candies-peanuts-light-morning-snack-soft-focus-square-format-218433433.jpg"
    },
    {
      "id": 4,
      "name": "Americano iced",
      "price":"₹499",
      "description": "Espresso diluted with hot water for a smooth taste.",
      "image": "https://static.vecteezy.com/system/resources/previews/038/079/066/non_2x/americano-iced-coffee-menu-coffee-and-roasted-beans-coffee-in-a-square-spoon-background-free-photo.jpg"
    },
    {
      "id": 5,
      "name": "Mocha",
      "price":"₹699",
      "description": "A delicious mix of espresso, chocolate, and steamed milk.",
      "image": "https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg"
    },
    {
      "id": 6,
      "name": "Caramel Macchiato",
      "price": "₹899",
      "description": "Espresso with a small amount of foamed milk.",
      "image": "https://dishnthekitchen.com/wp-content/uploads/2022/02/squarecaramelmacchiatoclose.jpg"
    }
  ]
  
const App = () => {
  return (
    <div>
  <Navbar/>
  <h1>Coffee menu</h1>
  <div className='coffee-list'>
    {
      products.map((product)=>(
     <Product
     key={product.id}
     name={product.name}
     image={product.image}
     price={product.price}
     description={product.description}
     />
      ))
    }
  </div>
    </div>
  )
}

export default App