import React, { useEffect } from "react"
import Header from "./layout/Header"
import Global from "./styles/Globals"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import PageCategory from "./pages/Category"
import NotFound from "./pages/NotFound"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "./redux/feactures/product/productSlice"
import Footer from "./layout/Footer"
import ProductDetails from "./pages/Productdetails"
import Checkout from "./pages/Checkout"

export default function App() {
  const productState = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  if (productState.loading) {
    return <div>Loading...</div>
  }

  if (productState.error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <Global />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:name" element={<PageCategory />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <Footer />
    </div>
  )
}
