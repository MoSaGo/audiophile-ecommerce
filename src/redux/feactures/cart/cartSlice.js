import { createSlice } from "@reduxjs/toolkit"

// const metaProduct = {
//    product:{}
//    count:0
//  }
const initialState = {
  products: [],
  totalItems: 0,
  subtotal: 0,
  shipping: 0,
  vat: 0,
  total: 0,
  ready: false,
  temp: 1,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plustempquantity: (state) => {
      state.temp = state.temp + 1
    },
    minustempquantity: (state) => {
      state.temp = state.temp - 1
    },
    tempquantity: (state) => {
      state.temp = 1
    },
    changetotrue: (state) => {
      state.ready = true
    },
    changetofalse: (state) => {
      state.ready = false
    },
    addProducts: (state, action) => {
      const {
        product: { id },
        count,
      } = action.payload

      const isAlreadyOnList = Boolean(
        state.products.find((item) => {
          return item.product.id === id
        }),
      )

      const newProduct = {
        product: action.payload.product,
        count,
      }

      if (isAlreadyOnList) {
        state.products = state.products.map((item) => {
          if (item.product.id === id) {
            return {
              ...item,
              count: item.count + count,
            }
          } else {
            return item
          }
        })
      } else {
        state.products.push(newProduct)
      }

      const price = action.payload.product.price

      state.totalItems += count
      state.subtotal += price * count
      state.shipping = 50
      state.vat += price * 0.16 * count
      state.total = state.shipping + state.subtotal + state.vat
    },
    removeProducts: (state, action) => {
      const { product, count } = action.payload

      const item = state.products.find((item) => {
        return item.product.id === product.id
      })

      if (item) {
        const newQuantity = item.count - count
        if (newQuantity < 1) {
          state.products = state.products.filter(
            (item) => item.product.id === product.id,
          )
        } else {
          state.products = state.products.map((item) => {
            if (item.product.id === product.id) {
              return {
                ...item,
                count: newQuantity,
              }
            } else {
              return item
            }
          })
        }
      }

      state.totalItems -= count
      state.subtotal -= count * product.price
      state.vat -= count * 0.16 * product.price
      state.shipping = state.products.length > 0 ? 50 : 0
    },
    removeAll: (state) => {
      state.products = []
      state.totalItems = 0
      state.subtotal = 0
      state.shipping = 0
      state.vat = 0
      state.total = 0
    },
  },
})

export const {
  addProducts,
  removeAll,
  removeProducts,
  changetofalse,
  changetotrue,
  tempquantity,
  minustempquantity,
  plustempquantity,
} = cartSlice.actions
export default cartSlice.reducer
