import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
const Cart = () => {
  const context = useContext(CartContext);

  return (
    <>
      <h1>I'm Cart</h1>
      <img src={context.cartList[0].pictureUrl}></img>
    </>
  );
};

export default Cart;
