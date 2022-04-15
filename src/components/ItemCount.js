import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

let maxStock = 7;
const ItemCount = ({ onAdd }) => {
  const [modify, setModify] = useState(0);

  const increasePurchase = () => {
    if (modify < maxStock) {
      setModify(modify + 1);
    }
  };
  const decreasePurchase = () => {
    if (modify > 0) {
      setModify(modify - 1);
    }
  };
  return (
    <>
      <div className='stockCounter'>
        <IconButton aria-label='Add product' onClick={increasePurchase}>
          <AddIcon />
        </IconButton>
        {modify}
        <IconButton aria-label='Remove product' onClick={decreasePurchase}>
          <RemoveIcon />
        </IconButton>
      </div>
      <button onClick={() => onAdd(modify)}>Add to cart</button>
    </>
  );
};

export default ItemCount;
