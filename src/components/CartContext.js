import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, n) => {
    let checkCart = cartList.find((article) => article.articleId === item.id);
    if (checkCart === undefined) {
      setCartList([
        ...cartList,
        {
          articleId: item.id,

          articleImg: item.pictureUrl,

          articleTitle: item.title,

          articlePrice: item.price,

          articleQty: n,
        },
      ]);
    } else {
      checkCart.articleQty += n;
    }
  };

  const clear = () => {
    setCartList([]);
  };
  const removeItem = (id) => {
    let filtered = cartList.filter((item) => item.articleId !== id);
    setCartList(filtered);
  };
  const addInCart = (id, n) => {
    let filtered = cartList.find((item) => item.articleId === id);
    filtered.articleQty += n;
    console.log(filtered.articleQty);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, clear, removeItem, addInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
