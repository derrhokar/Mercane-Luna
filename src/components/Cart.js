import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { increment, serverTimestamp, updateDoc } from 'firebase/firestore';
import db from '../utilities/firebaseconfig';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
const Cart = () => {
  const context = useContext(CartContext);
  const total =
    context.totals.Subtotal() + context.totals.Taxes() - context.totals.Discounts();

  const checkout = () => {
    context.cartList.forEach(async (item) => {
      const ref = doc(db, 'products', item.articleId);
      await updateDoc(ref, {
        stock: increment(-item.articleQty),
      });
    });

    let order = {
      buyer: {
        name: 'ElBicho',
        email: 'aymimadreelbicho@gmail.com',
        phone: '223-626-9420',
      },
      date: serverTimestamp(),
      items: context.cartList.map((item) => ({
        id: item.articleId,
        title: item.articleTitle,
        price: item.articlePrice,
        qty: item.articleQty,
      })),

      total: total.toFixed(2),
    };
    const fireStoreOrder = async () => {
      const newOrder = doc(collection(db, 'orders'));
      await setDoc(newOrder, order);
      return newOrder;
    };
    fireStoreOrder().then((result) =>
      alert(`Your order has been added successfully. Your order id is: ${result.id}`)
    );
    context.clear();
  };
  return (
    <>
      <h1 id='cartTitle'>Your Cart</h1>

      {context.cartList.length > 0 ? (
        <div id='cartScreen'>
          <div className='cartList'>
            <button onClick={context.clear}> Remove Items</button>
            <div className='cartElement'>
              {context.cartList.map((item) => (
                <>
                  <h3 className='itemQuantity'> {item.articleQty} items</h3>
                  <img src={item.articleImg}></img>

                  <p className='itemDesc'>Product: {item.articleTitle}</p>
                  <p className='itemPrice'>${item.articlePrice}</p>
                  <p className='totalItemPrices'>
                    ${context.calcItemTotalPrice(item.articleId).toFixed(2)} total
                  </p>
                  <button onClick={() => context.removeItem(item.articleId)}>
                    Delete article
                  </button>
                </>
              ))}
            </div>
          </div>
          <TableContainer sx={{ maxWidth: 350 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <p>Subtotal</p>
                  </TableCell>
                  <TableCell>
                    <p>{context.totals.Subtotal().toFixed(2)}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Taxes</p>
                  </TableCell>
                  <TableCell>
                    <p>{context.totals.Taxes().toFixed(2)}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Discounts</p>
                  </TableCell>
                  <TableCell>
                    <p>{context.totals.Discounts().toFixed(2)}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Total</p>
                  </TableCell>
                  <TableCell>
                    <p>{total.toFixed(2)}</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <button className='checkoutButton' onClick={() => checkout()}>
              Checkout Now
            </button>
          </TableContainer>
        </div>
      ) : (
        <div className='emptyCart'>
          <p>Your cart is empty</p>
          <Link to='/'>
            <button>Keep Looting</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
