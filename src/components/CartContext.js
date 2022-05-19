import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, n) => {
    let checkCart = cartList.find((article) => article.articleId === item.itemId);
    if (checkCart === undefined) {
      setCartList([
        ...cartList,
        {
          articleId: item.itemId,

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

  const calcQty = () => {
    let quantity = cartList.map((item) => item.articleQty);
    return quantity.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const calcItemTotalPrice = (id) => {
    let filtered = cartList.filter((item) => item.articleId === id);
    return filtered[0].articleQty * filtered[0].articlePrice;
  };
  var priceStorage = cartList.map((item) => calcItemTotalPrice(item.articleId));
  const totals = {
    Subtotal: () => {
      return priceStorage.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
    },
    Taxes: () => {
      return priceStorage.reduce(
        (previousValue, currentValue) => (previousValue + currentValue) * 0.65,
        0
      );
    },
    Discounts: () => {
      return priceStorage.reduce(
        (previousValue, currentValue) => (previousValue + currentValue) * 0.65,
        0
      );
    },
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clear,
        removeItem,
        calcQty,
        calcItemTotalPrice,
        totals,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
