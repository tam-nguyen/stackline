/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";

import { GET_PRODUCT, GET_PRODUCT_DETAIL } from "../actions/types";

const initialState = {
  products: [],
  productDetail: [],
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.data,
      };

    default:
      return state;
  }
};

export default combineReducers({
  item: clientReducer,
});
