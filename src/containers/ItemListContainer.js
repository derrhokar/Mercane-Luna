import ItemCount from '../components/ItemCount';
import { useState, useEffect } from 'react';
import { fetching } from '../utilities/products';
import ItemList from '../components/ItemList';
const ItemListContainer = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function getData() {
      let dataStorage = await fetching();
      setArticle(dataStorage);
    }
    getData();
  }, []);

  return (
    <>
      <ItemList articles={article} />
      <ItemCount />
    </>
  );
};
export default ItemListContainer;
