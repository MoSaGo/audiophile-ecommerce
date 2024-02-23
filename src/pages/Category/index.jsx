import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Title } from "./pages.category.styles"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../../redux/store"
import {
  addProducts,
  removeProducts,
} from "../../redux/feactures/cart/cartSlice"
import Slogan from "@components/Slogan"
import Productdescription from "../../components/Productdescription"
import Seeproducts from "../../components/Seeproducts"

const PageCategory = () => {
  const { name } = useParams()
  var count = 0

  const productState = useSelector((store) => store.products)
  const dispatch = useDispatch()
  const data = productState.products

  return (
    <div>
      <Title>{name}</Title>
      {data
        .filter((item) => {
          return item.category === name
        })
        .map((item) => {
          count++
          const link = "/product-details/" + item.id
          return (
            <div key={item.id}>
              <Productdescription
                count={count}
                name={item.name}
                description={item.description}
                imagedesktop={item.categoryImage.desktop}
                imagetablet={item.categoryImage.tablet}
                imagemobile={item.categoryImage.mobile}
                isnew={item.new}
                link={link}
              />
            </div>
          )
        })}
      <div style={{ marginTop: "120px" }}></div>
      <Seeproducts />
      <Slogan />
    </div>
  )
}

export default PageCategory
