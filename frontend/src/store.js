import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import userReducer from "./slices/userSlice";

const reducer = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  authState: authReducer,
  cartState: cartReducer,
  orderState: orderReducer,
  userState: userReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disables annoying warnings about non-serializable values
    }).concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // enables Redux DevTools only in dev
});

export default store;
