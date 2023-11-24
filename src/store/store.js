import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartSlice";
import detailReducer from "./reducer/detailSlice";
import authReducer from "./reducer/authSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
        detail: detailReducer,
    }
})
export default store;