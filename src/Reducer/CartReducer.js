import { ADD_ITEM, DELETE_ITEM } from "../ActionTypes/Actiontypes";

const initialState = {
  numOfItems: 0,
};

 const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,numOfItems: state.numOfItems - 1,
      };
    default:  return state;
  }
}
export  default CartReducer;