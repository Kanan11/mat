import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartProduct from '../../molecules/CartProduct/CartProduct';
import style from './Cart.module.scss';
import CartButton from '../../atoms/CartButton/CartButton';
import { clearCart } from '../../../store/actions/cartActions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container" style={{ minHeight: '500px', textAlign: 'center'  }}>
      <h1>Varukorg lista</h1>

      {!cart.length ? (
        <div>Varukorg är tom !</div>
      ) : (
        <>
          <div className={style.products}>
            {cart.products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>

          <div className={style.cartLastRow}>
            <div className="clearCart">
              <CartButton
                title="Ta bort alla"
                onClick={() => dispatch(clearCart())}
              />
            </div>
            <div className={style.totals}>
              <h5>+ hemleverans avgift 39SEK tillkommer</h5>
              <div>Totalt summan att betala:  {cart.total + 39} SEK</div>
              <NavLink to="/checkout" exact className="button">
                Betala med STRIPE
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
