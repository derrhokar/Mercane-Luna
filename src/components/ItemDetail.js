import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (n) => {
    alert(`You added ${n} items to the Cart`);
    setItemCount(n);
  };

  return (
    <>
      <div className='itemCard' key={item.id}>
        <p className='itemTitle'>{item.title}</p>
        <div className='itemImg'>
          <img src={item.pictureUrl}></img>
        </div>
        <span className='itemDescription'>{item.description}</span>
        <p className='itemPrice'>USD {item.price}</p>
      </div>

      <ItemCount initial={itemCount} onAdd={onAdd} />
    </>
  );
};
export default ItemDetail;
