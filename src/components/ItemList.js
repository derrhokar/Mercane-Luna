import React from 'react';
import Item from './Item';
import { CircularProgress } from '@mui/material';
function ItemList({ articles }) {
  return (
    <div className='itemCards'>
      {articles.length > 0 ? (
        articles.map((product) => <Item key={product.id} {...product} />)
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default ItemList;
