import React from "react";
import { addItem,deleteItem } from "./Actions/cartAction";

import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button className="green"  onClick={() => {
          dispatch(addItem());
        }}
        >Add Item to Cart</button>
      <button className="red"  disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}>Remove Item from Cart</button>
    </div>
  );
};

export default Cart;