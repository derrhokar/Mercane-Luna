import React from 'react';
import { Badge } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color='secondary'>
      <IconButton aria-label='Go to cart'>
        <ShoppingCartIcon />
      </IconButton>
    </Badge>
  );
};

export default CartWidget;
