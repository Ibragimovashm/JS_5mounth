import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import itemDataSlice from "./itemDataSlice";
const store = configureStore({
  reducer:{
    cart,
    itemDataSlice
  }
});


export default store;
