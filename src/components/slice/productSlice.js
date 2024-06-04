import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        cartItem: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let findproduct = state.cartItem.findIndex((item)=>item.id == action.payload)
        },
    },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer