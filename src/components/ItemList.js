import Item from './Item';
function ItemList({ articles }) {
  return (
    <div className='itemCards'>
      {articles.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ItemList;
