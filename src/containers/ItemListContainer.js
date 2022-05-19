import React from 'react';
import { useState, useEffect } from 'react';
import db from '../utilities/firebaseconfig';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
const ItemListContainer = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fireFetch = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));

      const fireData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return fireData;
    };
    fireFetch()
      .then((result) => setArticle(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemList articles={article} />
    </>
  );
};
export default ItemListContainer;
