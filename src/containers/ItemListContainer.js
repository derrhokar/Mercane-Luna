import { useState, useEffect } from 'react';
import { fetching } from '../utilities/products';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
  const [article, setArticle] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    async function getData() {
      let dataStorage = await fetching();
      if (catId === undefined) {
        setArticle(dataStorage);
      } else {
        setArticle(dataStorage.filter((item) => item.categoryId === parseInt(catId)));
      }
    }
    getData();
  }, [catId]);

  return (
    <>
      <ItemList articles={article} />
    </>
  );
};
export default ItemListContainer;
