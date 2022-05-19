import React from 'react';
import Item from './Item';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

const ItemList = ({ articles }) => {
  const { catId } = useParams();

  const catFilter = articles.filter((item) => catId == item.categoryId);
  const renderItem = () => {
    if (articles.length > 0) {
      return catId == undefined
        ? articles.map((product) => <Item key={product.id} {...product} />)
        : catFilter.map((product) => <Item key={product.id} {...product} />);
    } else {
      return <CircularProgress />;
    }
  };
  return <div className='itemCards'>{renderItem()}</div>;
};

export default ItemList;
//)
