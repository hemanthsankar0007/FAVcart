// store.js - Redux store configuration
// - Combines slice reducers used across the app
// - Configures middleware (thunk) and disables strict serializable checks
//   because we sometimes store non-serializable values (e.g., files or Stripe objects)
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import userReducer from "./slices/userSlice";

// Root reducer - namespaces each slice to avoid name collisions in the store
const reducer = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  authState: authReducer,
  cartState: cartReducer,
  orderState: orderReducer,
  userState: userReducer,
});

// Create the Redux store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable serializability checks for convenience
    }).concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // enable Redux DevTools in development
});

export default store;
