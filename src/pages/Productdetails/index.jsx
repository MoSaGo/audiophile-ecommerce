import React from "react"
import Seeproducts from "../../components/Seeproducts"
import Slogan from "../../components/Slogan"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Details from "../../components/Details"
import { store } from "../../redux/store"
import {
  addProducts,
  removeProducts,
} from "../../redux/feactures/cart/cartSlice"
import Alsolike from "../../components/Alsolike"

const ProductDetails = () => {
  const { id } = useParams()

  const productState = useSelector((store) => store.products)
  const data = productState.products
  const product = data.find((item) => item.id === Number(id))

  return (
    <div>
      <Details
        image={product.image.desktop}
        name={product.name}
        description={product.description}
        price={product.price}
        isnew={product.new}
        features={product.features}
        includes={product.includes}
        gallery={product.gallery}
        product={product}
      />
      <br />
      <br />
      <Alsolike />
      <div style={{ marginTop: "120px" }}></div>
      <Seeproducts />
      <Slogan />
    </div>
  )
}

export default ProductDetails
