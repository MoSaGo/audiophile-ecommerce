import React from "react"
import { Floatcontainer } from "./float.styles"
import { useSelector } from "react-redux"

const Float = (props) => {
  const cartState = useSelector((store) => store.cart)
  const { number, ...rest } = props
  return <Floatcontainer>{cartState.totalItems}</Floatcontainer>
}

export default Float
