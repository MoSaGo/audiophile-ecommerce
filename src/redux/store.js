import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./feactures/product/productSlice"
import cartReducer from "./feactures/cart/cartSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
})
