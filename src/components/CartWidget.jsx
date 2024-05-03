import { RiShoppingBasketLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <div id="cart-widget">
      <Link to="/cart">
        <RiShoppingBasketLine />
      </Link>
      <span>{total}</span>
    </div>
  );
};
