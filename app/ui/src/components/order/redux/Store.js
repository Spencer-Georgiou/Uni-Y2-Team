import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cartSlice";

//configuration of reducers and allow dispatching actions for the shopping cart functionality.
export const store = configureStore({
    reducer: cartReducer
})


