import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
const Cart = () => {
  const context = useContext(CartContext);
  console.log(context.cartList, 'cartlist');

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
                  <button onClick={() => context.removeItem(item.articleId)}>
                    Eliminar Artículo
                  </button>
                  <button onClick={() => context.addInCart(item.articleId)}>
                    Add another
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
                    <p>Holaxd</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Taxes</p>
                  </TableCell>
                  <TableCell>
                    <p>Holaxd</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Discounts</p>
                  </TableCell>
                  <TableCell>
                    <p>Holaxd</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Total</p>
                  </TableCell>
                  <TableCell>
                    <p>Holaxd</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
