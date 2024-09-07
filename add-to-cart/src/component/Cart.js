import React from 'react'
import { useSelector} from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <h4>Cart Items:</h4>
      {(cartItems && cartItems.length>0) ? cartItems.map((item, index)=>{
        return(
          <div key={index}>
            {item.name}
          </div>
        )
      }): <>No items in cart</>}
    </div>
  )
}

export default Cart
