import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { CircularProgress } from '@mui/material';

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const context = useContext(CartContext);
  const onAdd = (n) => {
    alert(`You added ${n} items to the Cart`);
    setItemCount(n);
    context.addToCart(item, n);
  };

  return (
    <>
      {Object.keys(item).length === 0 ? (
        <CircularProgress />
      ) : (
        <div className='itemCard' key={item.id}>
          <p className='itemTitle'>{item.title}</p>
          <div className='itemImg'>
            <img src={item.pictureUrl}></img>
          </div>
          <span className='itemDescription'>{item.description}</span>
          <p className='itemPrice'>USD {item.price}</p>
        </div>
      )}

      {itemCount > 0 ? (
        <Link to='../cart'>
          <button>Checkout</button>
        </Link>
      ) : (
        <ItemCount initial={itemCount} onAdd={onAdd} />
      )}
    </>
  );
};
export default ItemDetail;
