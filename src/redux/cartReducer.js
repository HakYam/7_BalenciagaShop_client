// create cart slice
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // check if item is already in cart
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
            } else (
                // here immuatable redux tooolkit
                state.products.push(action.payload)
            )
            
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        resetCart : (state) => {
            state.products = [];
        }
    },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;