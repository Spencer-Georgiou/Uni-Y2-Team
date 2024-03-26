import { createSlice } from "@reduxjs/toolkit";

//createSlice: this method simplifies the process of creating actions and reducers.
//It takes the name of the slice, initial state, and reducer functions
const cartSlice = createSlice({
    //name of the slice
    name: "cart",
    //initial state
    initialState: {
        cart: [],
        table: 0,
    },

    //returns the action creators to be dispatched, and the reducer configures the Redux store.
    reducers: {
        //Receives the item object to be added to the state as payload.
        addToCart: (state, action) => {
            //first check if it already exists
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            //if it does, we increment its quantity
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                //if it doesn’t, we add it to the state
                state.cart.push({ ...action.payload, quantity: 1 });
            }

        },
        // Receives an item ID as payload
        incrementQuantity: (state, action) => {
            //find the item in the state using the find method and then increment its quantity by 1.
            const item = state.cart.find((item) => item.name === action.payload);
            item.quantity++;
        },
        //receives an item ID as payload. Only decrement the item quantity when its quantity is greater than 1.
        decrementQuantity: (state, action) => {
            //find the item by id
            const item = state.cart.find((item) => item.name === action.payload);
            //cannot decrease quantity to 0
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        //Receives the item ID as a payload
        removeItem: (state, action) => {
            //remove it from the state
            const removeItem = state.cart.filter((item) => item.name !== action.payload);
            state.cart = removeItem;
        },
        //store the table number when user checkout
        addTableNumber: (state, action) => {
            state.table = action.payload;
        },
        //remove all the cart item when user reopen our website
        removeAllItem: (state) => {
            state.cart = [];
        }

    },
});

//return reducer configures the Redux store.
export const cartReducer = cartSlice.reducer;
//returns the action creators to be dispatched
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    addTableNumber,
    removeAllItem,
} = cartSlice.actions;