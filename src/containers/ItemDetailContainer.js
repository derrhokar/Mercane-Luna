import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../components/ItemDetail';
import db from '../utilities/firebaseconfig';
const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const fireFetch = async () => {
      const docRef = doc(db, 'products', itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };
    fireFetch();
  }, []);

  return <ItemDetail item={data} />;
};

export default ItemDetailContainer;
