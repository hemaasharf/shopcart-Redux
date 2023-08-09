import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    cartList: []
  },
  reducers: {
    add(state, action) {
      const updateList = state.cartList.concat(action.payload)
      return { ...state, cartList: updateList, total: state.total + action.payload.price }
    },
    remove(state, action) {
      const updateList = state.cartList.filter((item) => {
        return item.id !== action.payload.id
      })
      const updateTotal = updateList.reduce((total, item) => {
         return total + (item.price * item.quantity)
      }, 0)
      return { ...state, cartList: updateList, total: updateTotal}
    },
    updateQuantity(state, action) {
      const { product, input } = action.payload
      const updateList = state.cartList.map((item) => {
        if (product.id === item.id) {
          return { ...item, quantity: input }
        } else return item
      })
      const updateTotal = updateList.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
      return { ...state, cartList: updateList, total: updateTotal  }
    }
  },
})
export const { add, remove, updateQuantity } = cartSlice.actions
export const cartReducer = cartSlice.reducer
