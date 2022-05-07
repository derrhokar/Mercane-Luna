import React from 'react';
import { Badge } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const context = useContext(CartContext);

  return (
    <Badge badgeContent={context.cartList.length} color='secondary'>
      <IconButton aria-label='Go to cart'>
        <ShoppingCartIcon />
      </IconButton>
    </Badge>
  );
};

export default CartWidget;
