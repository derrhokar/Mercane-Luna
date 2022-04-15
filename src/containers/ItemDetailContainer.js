import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetching } from '../utilities/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    async function getData() {
      let dataStorage = await fetching();
      setData(dataStorage.find((item) => item.id === parseInt(itemId)));
    }
    getData();
  }, []);

  return <ItemDetail item={data} />;
};

export default ItemDetailContainer;
