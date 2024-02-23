import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  loading: true,
  error: null,
}

export const fetchAllProducts = createAsyncThunk(
  "products/getAll",
  async () => {
    try {
      const response = await window.fetch("/products")
      const dataObj = await response.json()
      return dataObj.data
    } catch (error) {
      throw new Error(error.message)
    }
  },
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, //eventos sincronos
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = false
      state.error = null
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
  }, //eventos asincronos
})

export default productSlice.reducer
