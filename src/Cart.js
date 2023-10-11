import React from "react";
import { addItem,deleteItem } from "./Actions/cartAction";
import cart from './assest/cart.svg';
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div className="cart m-10">
        <div className="flex justify-center"> 
            <h2>Number of items in Cart:</h2>
            <img src={cart} className="w-[20px] h-[20px] "/>
        {state.numOfItems>0?
        <div className=" w-4 h-4 ml-[-6px] mt-[-8px] rounded-[25px] text-white bg-red-500 text-center text-xs justify-center ">{state.numOfItems}</div>:null}
        </div>
     
       
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