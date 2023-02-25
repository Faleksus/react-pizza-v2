import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../../img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик порожній <span>😕</span>
      </h2>
      <p>
        Ви ще не замовили піцу.
        <br />
        Для того, щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися</span>
      </Link>
    </div>
  );
};


export default CartEmpty;