import { Link } from 'react-router-dom';

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <>
      <div className='itemCard' key={id}>
        <p className='itemTitle'>{title}</p>
        <div className='itemImg'>
          <img src={pictureUrl}></img>
        </div>
        <span className='itemDescription'>{description}</span>
        <p className='itemPrice'>USD {price}</p>
        <Link to={`/item/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </>
  );
};

export default Item;
